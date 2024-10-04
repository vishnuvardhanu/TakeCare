import React from 'react'
import HamBurgerMenu from './HamBurgerMenu'
import Help from './Help'

function Navbar() {
  return (
    <div className='w-full h-[75px] text-white bg-[#41d741] flex justify-between items-center px-4'>
        <HamBurgerMenu/>
        <p className='text-3xl'>TakeCare</p>
        <Help/>
    </div>
  )
}

export default Navbar