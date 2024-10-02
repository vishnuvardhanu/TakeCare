import React, { useState, useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import AppContext from '../context/AppContext';

function Dashboard() {

  
  const [width, setWidth] = useState(window.innerWidth)
  const textSize = width <= 1200 ? 'text-xl' : 'text-2xl';
  const screensize = width >=1000 ? 'w-[82%]' : 'w-full';
  useEffect(() => {
      const handleResize = () => {
          setWidth(window.innerWidth);
      };

      // Listen for resize events
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);  
  return (
    <div className='flex h-[100vh] w-full'>
      { 
        width>=1000 &&
        <Sidebar width={width}/>
      }
        <div className={`bg-[#7efc7e] ${screensize} h-full flex flex-col justify-end items-center py-2`}>
          {/* {
            width>=1000 &&
            <h2 className="text-start w-full px-4 text-2xl text-[#1f873c] font-semibold">WELCOME</h2>
          } */}
          {
            width<=1000 && 
            <Navbar/>
          }
          <AppContext>
            <Outlet/>
          </AppContext>
        </div>
    </div>
  )
}

export default Dashboard