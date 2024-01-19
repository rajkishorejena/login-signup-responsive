import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     userName:"",
//     email:"",
//     password:""
// };

const initialState={
    users:[],
    currentUser:null
};

export const UserInfoSlice = createSlice({
    name:"userInfo",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload);
        },
        addCurrentUser :(state,action)=>{
            state.currentUser = action.payload
        }

    }
});

export const {addUser,addCurrentUser} = UserInfoSlice.actions;
export default UserInfoSlice.reducer;