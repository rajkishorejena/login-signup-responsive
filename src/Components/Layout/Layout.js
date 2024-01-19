import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
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