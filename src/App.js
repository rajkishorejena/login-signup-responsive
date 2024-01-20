
import './App.css';
import {RouterProvider, createBrowserRouter, redirect} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Error from './Pages/Error';
import Dashboard from './Pages/Dashboard';
import Layout from './Components/Layout/Layout';
import { useSelector } from "react-redux"
import { checkAuthLoader } from './Utils/Auth';
import Profile from './Pages/Profile';
import AuthRoutes from './Routes/AuthRoutes';

function App() {
  // const { currentUser } = useSelector((state) => state.userInfo);

 const routes = createBrowserRouter([
  {
    path:"/",
    element:<AuthRoutes/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Login/>,   
      },
      {
        path:"/signup",
        element:<SignUp/>,
      },
    ]

  },
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard/>,
      },
      {
        path:"/profile",
        element:<Profile/>,
      }
    ]
  }
 ])

  return (
     <RouterProvider router={routes}/>
  );
}

export default App;
