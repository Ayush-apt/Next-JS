'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
  const pathname = usePathname()

  return (
    <div className='flex justify-between fixed top-0 w-full h-[60px] bg-white'>
      <div className='p-5 font-bold'>🌍 Travel Guide</div>
      <div className='flex gap-4 p-5'>
        <Link className={`hover:text-emerald-500 ${pathname=="/"?"text-blue-500":""}`} href={'/'}>Home</Link>
        <Link className={`hover:text-emerald-500 ${pathname=="/destination"?"text-blue-500":""}`} href={'/destination'}>Destination</Link>
        <Link className={`hover:text-emerald-500 ${pathname=="/contact"?"text-blue-500":""}`} href={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Nav
