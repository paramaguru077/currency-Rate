import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Table from './Table'
import { useDispatch } from 'react-redux';
import './App.css'
import { setSearchh } from './redux/slice/Search';
import { setData } from './redux/slice/Data';
const App = () => {
  const dispatch = useDispatch();
  const dispatch1 = useDispatch()
  const[search,setSearch]= useState("");
  const[currency,setCurrency]=useState([]);
  const fetchApi =async()=>{
    try{
      const response = await axios.get(`https://openapiv1.coinstats.app/coins?limit=20`,{
       accept: 'application/json',
        headers:{'X-API-KEY':'sn7S3OfNeTMVT2BzF7YGP8l+D/fyW+58Ajqq3yyWm34='}
      })
      setCurrency(response.data.result)
    }
    catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{
    fetchApi()
  },[]);
  dispatch(setSearchh(search));
  dispatch1(setData(currency));

  return (
    <div className='App'>
      <h1>Crypto currency</h1>
      <input type="text" placeholder='search...' value={search} onChange={(e)=>setSearch(e.target.value)} />
      <Table/>
    </div>
  )
}

export default App
