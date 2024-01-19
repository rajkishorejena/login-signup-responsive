import { redirect } from "react-router-dom";

export const checkAuthLoader =  () => {
    return redirect('/');
//   const user  = currentUser?.userName
//   console.log("user",user)
//   if(user==undefined){
//     return redirect("/")
//   }else{
//     return redirect('/dashboard');
//   };

}




