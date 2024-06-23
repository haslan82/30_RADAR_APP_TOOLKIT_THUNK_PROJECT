import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    isError: false,
    users: [],
}


const classicSlice = createSlice({
    name:"classic",
    initialState,
    reducers:{
        setLoading:(state) => {
            state.isLoading=true;
            console.log(state.isLoading)
        },
    },
})

export const {setLoading} = classicSlice.actions;
export default classicSlice.reducer