import React, { useEffect } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Layout = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.userInfo);
  useEffect(()=>{
    if(!currentUser?.userName){
        return navigate('/')
    }
   },[])
  return (
    <div className="flex h-screen bg-gray-100">
    <SideBar/>
    <div className="flex-1 flex flex-col overflow-hidden">
    <Header/>
      <Outlet/>
    </div>
  </div>
  )
}

export default Layout