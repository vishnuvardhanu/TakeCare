import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
function Dashboard() {
  return (
    <div className='flex h-[100vh] w-full'>
        <Sidebar/>
        <div className='bg-[#7efc7e] w-[82%]  h-full flex flex-col justify-end items-center pb-2'>
          <h2 className='text-start w-full px-4 text-2xl text-[#1f873c] font-semibold'>WELCOME</h2>
          <Outlet/>
        </div>
        
    </div>
  )
}

export default Dashboard