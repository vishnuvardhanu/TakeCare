import React,{useContext} from 'react'
import { MyContext } from '../context/AppContext'

function History() {
  const{history,setHistory}=useContext(MyContext);
  console.log(history)
  return (
    <div className='w-[98%] h-full p-5 bg-white rounded overflow-hidden overflow-y-scroll'>
      
    </div>
  )
}

export default History