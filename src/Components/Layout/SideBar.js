

import React from 'react'

 const SideBar = () => {
  return (
    <aside className="bg-gray-800 text-gray-200 w-64 py-6 hidden sm:block">
    <div className="text-white uppercase text-2xl font-bold tracking-widest text-center mb-6">Dashboard</div>
    <nav>
      <a href="#" className="block p-4 hover:bg-gray-600">Home</a>
      <a href="#" className="block p-4 hover:bg-gray-600">Profile</a>
      <a href="#" className="block p-4 hover:bg-gray-600">Settings</a>
    </nav>
  </aside>
  )
};
export default SideBar;