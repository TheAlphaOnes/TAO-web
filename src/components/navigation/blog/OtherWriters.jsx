import React from 'react'

export default function otherWriters({imageUrl , authorName}) {//takes props from blog.jsx
  return (
    <div>
      <div className=' p-2'>
      <div className='flex items-center'>
        <div><img src={imageUrl} alt="post image" className='w-10 h-10 rounded-full'/></div>
        <div className='pl-2'>{authorName}</div>
      </div >
    </div>
    </div>
  )
}
