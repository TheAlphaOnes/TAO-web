import React from 'react'

export default function StaffPicks({imageUrl , authorName , title}) {//takes props from blog.jsx
  return (
    <div className=' p-2'>
      <div className='flex items-center'>
        <div><img src={imageUrl} alt="post image" className='w-10 h-10 rounded-full'/></div>
        <div className='pl-2'>{authorName}</div>
      </div >
      <div className='p-2 text-xl'>{title}</div>
    </div>
  )
}
