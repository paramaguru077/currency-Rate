import { configureStore } from "@reduxjs/toolkit"; 
import search from '../redux/slice/Search'
import Data from "./slice/Data";
const store = configureStore({
    reducer:{
        searchData:search,
        currency:Data
    }
})

export default store;