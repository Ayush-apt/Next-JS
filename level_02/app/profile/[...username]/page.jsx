import React from 'react'

async function page({params}){
  const data = await params;
  console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default page