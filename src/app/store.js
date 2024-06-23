import { configureStore } from "@reduxjs/toolkit";
import classicReducer from "./slices/classicSlice";


export default configureStore({
    reducer: classicReducer,
})