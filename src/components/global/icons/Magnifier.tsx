import { FillableIcon } from '@/types'
import React from 'react'

export const Magnifier: FillableIcon = ({ fill, className }) => {
  return (
    <svg
      className={className}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4767 14.3326C12.8024 14.3326 14.6877 12.4473 14.6877 10.1217C14.6877 7.79607 12.8024 5.91077 10.4767 5.91077C8.15111 5.91077 6.26581 7.79607 6.26581 10.1217C6.26581 12.4473 8.15111 14.3326 10.4767 14.3326ZM10.4767 15.8795C13.6567 15.8795 16.2346 13.3017 16.2346 10.1217C16.2346 6.94175 13.6567 4.36389 10.4767 4.36389C7.29679 4.36389 4.71893 6.94175 4.71893 10.1217C4.71893 13.3017 7.29679 15.8795 10.4767 15.8795Z"
        fill={fill}
        className={fill || 'svg-bg-dark'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4543 13.2208C13.7564 12.9188 14.2461 12.9188 14.5481 13.2208L17.4649 16.1376C17.767 16.4397 17.767 16.9294 17.4649 17.2314C17.1629 17.5335 16.6732 17.5335 16.3711 17.2314L13.4543 14.3146C13.1523 14.0126 13.1523 13.5229 13.4543 13.2208Z"
        fill={fill}
        className={fill || 'svg-bg-dark'}
      />
    </svg>
  )
}
