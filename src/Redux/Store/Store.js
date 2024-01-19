import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import UserInfoSlice from "../Slice/UserInfoSlice";

const persistConfig = {
  key: "root",
  storage,
 
};
const rootReducer = combineReducers({
    userInfo: UserInfoSlice,
  
  })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
