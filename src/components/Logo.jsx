import React from 'react'
import '../index.css'

function Logo({textsize}) {
  return (
    <div className='flex justify-center items-center bg-white p-1 rounded-md m-2'>
        <p className={`text-with-shadow font-bold ${textsize} text-green-500`}>TC</p>
    </div>
  )
}

export default Logo