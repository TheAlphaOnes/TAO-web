import React from 'react'

export default function OtherWriters({imageUrl , authorName}) {//takes props from blog.jsx
  return (
    <div>
      <div className=' p-2'>
      <div className='flex items-center'>
        <div><img src={imageUrl} alt="post image" className='w-[25px] h-[25px] rounded-full'/></div>
        <div className='pl-2 text-[10px] font-[500] font-quicksand'>{authorName}</div>
      </div >
    </div>
    </div>
  )
}
