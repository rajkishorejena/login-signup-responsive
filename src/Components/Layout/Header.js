import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import {addCurrentUser} from "../../Redux/Slice/UserInfoSlice"
const Header = () => {
 const dispatch = useDispatch();
 const navigate =  useNavigate();
 const { currentUser } = useSelector((state) => state.userInfo);


  const handleLogout = () =>{
    dispatch(addCurrentUser(null));
    navigate('/')
  }

  return (
    <header className="bg-white border-b border-gray-300 p-4">
    <div className="flex items-center justify-between">

      <button className="text-gray-500 focus:outline-none sm:hidden">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* User Info */}
      <div>
        <div className="text-sm font-semibold text-gray-600">{currentUser?.userName}</div>
        <div className="text-xs text-gray-500">{currentUser?.email}</div>
      </div>
      <button
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  </header>
  )
}

export default Header