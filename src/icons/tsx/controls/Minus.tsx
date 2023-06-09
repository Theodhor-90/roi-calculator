import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Minus: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 12H19'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}