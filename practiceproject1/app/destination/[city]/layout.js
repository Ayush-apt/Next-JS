export default function layout ({children, info}) { 
  return ( 
    <div className="flex justify-around m-20">
      <div>{children}</div>
      <hr />
      <div>{info}</div>
    </div> 
  ) 
}