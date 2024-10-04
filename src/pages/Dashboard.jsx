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
    <div className={`flex h-[100vh] w-full ${width<1000? 'flex-col': 'flex-row'}`}>
      { 
        width>=1000 &&
        <Sidebar width={width}/>
      }
      {
        width<=1000 && 
        <Navbar/>
      }
      <div className={`bg-[#7efc7e] ${screensize} ${width<1000 ? 'pt-0 px-0' : 'm-0'} h-full flex flex-col justify-end items-center py-2`}>
        <AppContext>
          <Outlet/>
        </AppContext>
      </div>
    </div>
  )
}

export default Dashboard