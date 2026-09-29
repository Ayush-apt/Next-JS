// Note - SSR,SSG and ISR only works in server component
'use client'

import React, { useEffect } from 'react'

async function page() {

  // SSR
  // let response = await fetch('http://localhost:3000/api/user',{
  //   cache: 'no-store'
  // })

  // let data = await response.json()
  // console.log(data)

  // SSG 
  // let response = await fetch('http://localhost:3000/api/user', {
  //   cache: 'force-cache'
  // })

  // let data = await response.json()
  // console.log(data)

  // ISR 
  // let response = await fetch('http://localhost:3000/api/user', {
  //   next:{revalidate : 5}
  // })

  // let data = await response.json()
  // console.log(data)

  const handleApi = async ()=> {
    let response = await fetch('/api/user')

    let data = await response.json()
    console.log(data)
  }
  useEffect(()=>{
    handleApi()
  },[])

  return (
    <div>

    </div>
  )
}

export default page
 