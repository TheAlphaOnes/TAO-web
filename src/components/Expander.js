import React ,{useState} from 'react'

export default function Expander( {title,disc}) {
    const [show  , setShow] = useState(false)
  return (
    
<div className="border-b-2 border-red-700 myexpan">
  <div onClick={()=>setShow(!show)} className="flex cursor-pointer justify-between gap-2 py-4  mt-1 rounded-lg  hover:text-indigo-500 active:text-indigo-600">
    <span className="font-semibold transition duration-100 md:text-lg text-white">{title}</span>
    <span  className="title-gradent text-2xl">
      {show? "-" : "+"}
    </span>
  </div>
  {show && <p   className="mb-4  text-white">{disc}</p>}
  
</div>
    
  )
}
