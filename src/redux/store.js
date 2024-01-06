import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";


import {reducer} from './rootReducer';
// import { baseApi } from "./api/baseApi";


export const store = configureStore({
    reducer,
    
    middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
  
}
    
);




