'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const {data} = useSession()
  console.log(data)
  
  return (
    <div>
      Page
    </div>
  )
}

export default page
