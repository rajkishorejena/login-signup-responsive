
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Error from './Pages/Error';
import Dashboard from './Pages/Dashboard';
import Layout from './Components/Layout/Layout';
import { useSelector } from "react-redux"
import { checkAuthLoader } from './Utils/Auth';

function App() {
  // const { currentUser } = useSelector((state) => state.userInfo);

 const routes = createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
    errorElement:<Error/>,
  },
  {
    path:"/signup",
    element:<SignUp/>,
    errorElement:<Error/>,
  },
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard/>,
      }
    ]
  }
 ])

  return (
     <RouterProvider router={routes}/>
  );
}

export default App;
