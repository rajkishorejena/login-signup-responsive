import React from 'react'
import { CgProfile } from "react-icons/cg";
import {  useSelector } from 'react-redux';
const Profile = () => {
    const {currentUser} = useSelector((state)=>state.userInfo)
  return (

     <main className=" flex flex-1 overflow-x-hidden overflow-y-auto justify-center items-center bg-gray-100 p-4 ">
        
            <div className='w-[30%] flex flex-col items-center bg-slate-400 p-5 rounded-md shadow-md'>

            
            <div className='flex w-full items-center justify-center'>
            <CgProfile className='text-5xl' />
            </div>
            <div className='w-ful flex flex-col gap-2 items-center justify-center mt-2 '>
               <p className='text-3xl font-bold '> Welcome Back!</p>
               <p className='text-xl font-medium '>{currentUser?.userName}</p>
               <p className='text-xl font-medium '> {currentUser?.email}</p>
            </div>
            </div>
        
    </main>
  )
}

export default Profile