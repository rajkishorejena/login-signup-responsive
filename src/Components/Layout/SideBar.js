

import React from 'react'
import { NavLink } from 'react-router-dom';

 const SideBar = () => {
  return (
    <aside className="bg-gray-800 text-gray-200 w-64 py-6 hidden sm:block">
    <div className="text-white uppercase text-2xl font-bold tracking-widest text-center mb-6">Dashboard</div>
    <nav>
      <NavLink to="/dashboard" className="block p-4 hover:bg-gray-600">Home</NavLink>
      <NavLink to="/profile" className="block p-4 hover:bg-gray-600">Profile</NavLink>
      <NavLink to="#" className="block p-4 hover:bg-gray-600">Settings</NavLink>
    </nav>
  </aside>
  )
};
export default SideBar;