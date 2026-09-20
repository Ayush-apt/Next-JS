'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  return (
    <div>
      <ul>
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/about"}><li>About</li></Link>
        <Link href={"contact"}><li>Contact</li></Link>
      </ul>

      <button className='p-3 bg-amber-700 rounded-2xl' onClick={() => router.push("/about")}>
        Go to About
      </button>
    </div>
  )
}

export default page
