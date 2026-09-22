'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const destination = ["Paris", "Tokyo", "NewYork"]
  const router = useRouter()

  return (
    <div className='flex flex-col gap-4 justify-center items-center h-full text-white'>
      <div className='mt-10 text-2xl'>Choose Your Destination</div>

      <div>
        {destination.map((d, index) => (
          <div key={index} className='flex justify-center items-center h-25 w-40 rounded-2xl bg-white text-black text-xl font-bold my-5 hover:text-gray-400'
            onClick={() => router.push(`/destination/${d}`)}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
