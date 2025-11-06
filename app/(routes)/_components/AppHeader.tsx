import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import path from 'path'
import { li } from 'motion/react-client'

function AppHeader() {

    const MenuOption=[
        {
            name:'Dashboard',
            path: '/dashboard'
        },
        {
            name:'upgrade',
            path:'/upgrade'
        },
        {
            name:'How it works?',
            path:'/how-it-works'
        }
    ]



  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
        {/* <h1 className="text-base font-bold md:text-2xl">AI Mock interview</h1> */}
      </div>
      <div>
        <ul className='flex gap-5'>
            {MenuOption.map((option, index) => (
                <li key={option.path} className='text-lg hover:scale-105 transition-all cursor-pointer'>{option.name}</li>

            ))}
        </ul>

      </div>
      <UserButton />
    </nav>
  )
}

export default AppHeader
