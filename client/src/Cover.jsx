import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import Tree from './pngwing.com (1).png';
import Ambulance from './images/Ambulance.png'

const Cover = () => {
  return (
    <div className='back font-bold h-screen w-full bg-blue-300'>
    <h1 className='h-[5rem] mt-0 w-full font-bolds items-center flex justify-center p-10 text-3xl font-mono text-red-600 bg-blue-300 shadow-lg'>Dream Line Hospital</h1>
    <div className='w-full h-20 top-1/2  absolute flex justify-center items-center'> <Link to="/Login" className=' h-auto p-2 pl-7 pr-7 mt-8 mr-10 bg-green-700 text-white'>Login</Link></div>
    <img className='h-[25rem] absolute left-10 top-1/4 mt-12 mr-20 hidden lg:block' src={Tree} alt="" />
    <img className='h-[25rem] absolute right-10 top-1/3 mt-[5.5rem] mr-20s hidden lg:block' src={Ambulance} alt="" />
    <div className='h-1/6 w-full border-t-4 border-slate-600 bg-lime-600 absolute bottom-0'></div>
    </div>
  )
}

export default Cover;
