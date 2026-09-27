import React from 'react'

type buttonProps = {
  data: string,
  action: ()=>void
}

const Button = ({ data, action }: buttonProps) => {
  return (
    <div>
      {data}
    </div>
  )
}

export default Button