import {createSlice} from '@reduxjs/toolkit'

const initialState={
    data:[],
}

export const dataSlice=createSlice({
    name:"slice2",
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload;
        }
    }
});
export const{setData}= dataSlice.actions;

export default dataSlice.reducer

