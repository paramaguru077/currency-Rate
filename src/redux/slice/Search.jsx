import {createSlice} from '@reduxjs/toolkit'

const initialState={
    search:"",
}

export const searchSlice=createSlice({
    name:"slice1",
    initialState,
    reducers:{
        setSearchh:(state,action)=>{
            state.search=action.payload;
        }
    }
});
export const{setSearchh}= searchSlice.actions;

export default searchSlice.reducer

