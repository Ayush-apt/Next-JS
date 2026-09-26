'use client'
import Button from '../component/Button'
import React, { useState } from 'react'

const page = () => {

  const [count, setCount] = useState<number>()

  return (
    <div>
      <Button/>
    </div>
  )
}

export default page
