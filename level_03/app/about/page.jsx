import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      About Page
      <Image src={"https://images.unsplash.com/photo-1788821958025-53c2026eadcb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='vercel' width={200} height={200}/>
    </div>
  )
}

export default page
