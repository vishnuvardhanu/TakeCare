import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

function Sidebar({width}) {

  const textsize = width >= 1200 ? 'text-4xl' : width >= 1080 ? 'text-3xl' : 'text-2xl';

  return (
    <div className='h-full w-[18%] bg-[#41d741] text-white'>
        <div className='flex h-[10%] items-center mt-3 w-full justify-center'>
             <Logo textsize={textsize} />
            <p className={`font-bold ${textsize}`}>TakeCare</p>
        </div>
        <div className='flex flex-col w-full h-[60%] justify-center items-center gap-4 font-semibold text-xl'>
          <NavLink to={"/"} className="hover:underline decoration-green-700 decoration-2">Home</NavLink>
          <NavLink to={"/history"} className="hover:underline decoration-green-700 decoration-2">History</NavLink>
        </div>
    </div>
  )
}

export default Sidebar