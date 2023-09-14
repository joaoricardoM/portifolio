import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-clip">
      <div className="w-44 h-auto flex items-center justify-center relative">
        <CircularText className={'fill-black animate-spin-slow'} />
        <Link
          href="mailto:joaomiranda997@hotmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid
          border-dark h-20 w-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
