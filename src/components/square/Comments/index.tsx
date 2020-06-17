import React, { useState } from 'react'

import $ from './style.module.scss'
import $c from '@/components/square/Comments/style.module.scss'
import ApiHost from '@/modules/api-host'
import { CommentAttrs } from '@payw/eodiro-one-api/database/models/comment'
import CommentsContext from './comments-context'
import Information from '@/components/global/Information'
import NewComment from './NewComment'
import { OneApiError } from '@payw/eodiro-one-api/api/one/types'
import { Tokens } from '@/api'
import _ from 'lodash'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { oneApiClient } from '@payw/eodiro-one-api'
import { useAuth } from '@/pages/_app'

const FriendlyTime = dynamic(() => import('@/components/utils/FriendlyTime'), {
  ssr: false,
})

const CommentItem: React.FC<{
  comment: CommentAttrs
  index: number
  ownerId: number
  deleteComment: (index: number) => void
}> = React.memo(({ comment, index, ownerId, deleteComment }) => {
  const auth = useAuth()

  return (
    <div className={$['comment-item']}>
      <div className={$['first-row']}>
        <div className={$['nick-and-time']}>
          <span
            className={
              comment.user_id === ownerId ? $['owner-nick'] : $['guest-nick']
            }
          >
            {comment.random_nickname}
          </span>
          <FriendlyTime time={comment.uploaded_at} className={$['time']} />
        </div>
        {auth.userId === comment.user_id && (
          <div>
            <button
              className={$['delete']}
              onClick={async () => {
                if (!confirm('정말 삭제하시겠습니까?')) return

                const payload = await oneApiClient(ApiHost.getHost(), {
                  action: 'deleteComment',
                  data: {
                    accessToken: (await Tokens.get()).accessToken,
                    commentId: comment.id,
                  },
                })

                if (payload.err === OneApiError.NO_CONTENT) {
                  alert('이미 삭제되었거나 존재하지 않는 댓글입니다.')
                } else {
                  deleteComment(index)
                }
              }}
            >
              <i className={classNames('f7-icons', $['trash'])}>trash</i>
            </button>
          </div>
        )}
      </div>
      <p className={$['body']}>{comment.body}</p>
    </div>
  )
})

const Comments: React.FC<{
  comments: CommentAttrs[]
  ownerId: number
}> = (props) => {
  const [comments, setComments] = useState(props.comments)

  let inner: JSX.Element | JSX.Element[]

  function deleteComment(commentIndex: number): void {
    _.pullAt(comments, commentIndex)
    setComments([...comments])
  }

  if (!comments) {
    inner = <Information title="댓글을 가져올 수 없습니다." />
  } else if (comments && comments.length === 0) {
    inner = <p className={$['no-comments-yet']}>아직 댓글이 없습니다.</p>
  } else {
    inner = (
      <div>
        {comments.map((comment, i) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            ownerId={props.ownerId}
            index={i}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={$c['eodiro-square-post-comments']}>
      {inner}
      <CommentsContext.Provider
        value={{
          comments,
          setComments,
        }}
      >
        <NewComment />
      </CommentsContext.Provider>
    </div>
  )
}

export default Comments
