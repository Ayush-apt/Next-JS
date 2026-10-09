'use client'
import Button from '../component/Button'
import React, { useState } from 'react'

const page = () => {

  const [count, setCount] = useState<number>()
  function fn(){

  }

  return (
    <div>
      <Button data="Ashu" action={fn}/>
    </div>
  )
}

export default page