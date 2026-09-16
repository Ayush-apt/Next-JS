import React from 'react'

async function page({params}){
    const { username } = await params
  return (
    <div>
      Dynamic Profile Page : {username}
    </div>
  )
}

export default page
