import React from 'react'
import Image from 'next/image'

import parisImg from '../../../public/paris.jpg'
import tokyoImg from '../../../public/tokyo.jpg'
import nyImg from '../../../public/newyork.jpg'

async function page({ params }) {
  const { city } = await params

  return (
    <div className='text-white'>
      {city} is a beautiful city

      {city == "Paris" && (
        <Image src={parisImg} height={400} width={400} alt="Paris" />
      )}

      {city == "Tokyo" && (
        <Image src={tokyoImg} height={400} width={400} alt="Tokyo" />
      )}

      {city == "New York" && (
        <Image src={nyImg} height={400} width={400} alt="New York" />
      )}
    </div>
  )
}

export default page