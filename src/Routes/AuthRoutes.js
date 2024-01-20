import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AuthRoutes = () =>{ 
const navigate  = useNavigate()
const { currentUser } = useSelector((state) => state.userInfo);
// console.log(currentUser)

   useEffect(()=>{
    if(currentUser?.userName){
        console.log("userName",currentUser.userName)
        return navigate('/dashboard')
    }
   },[])
      

    return(
        <>
         <Outlet/>
        </>
    )

};
export default AuthRoutes;