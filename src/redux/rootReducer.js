import { baseApi } from "./api/baseApi";
import filterReducer from "./features/filterSlice"



export const reducer = {
 
  [baseApi.reducerPath]: baseApi.reducer,
   filter: filterReducer
};
