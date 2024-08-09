import React from 'react'
import { useSelector } from 'react-redux'

const Table = () => {
  const result = useSelector((state)=>state.searchData.search)
  const info = useSelector((state)=> state.currency.data);
  console.log(info)
  return (
   <>
     <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market cap</th>
            <th>Price</th>
            <th>Available</th>
            <th>Volume(2hr)</th>
          </tr> 
        </thead>
        <tbody>
          {info.filter((val)=>{
            return val.name.toLowerCase().includes(result.toLowerCase())
          }).map((val,i)=>(
            <tr key={i}>
              <td className='rank'>{val.rank}</td>
              <td className='logo'><a href={val.websiteUrl}><img src={val.icon} alt="" /></a>
              <p>{val.name}</p>
              </td>
              <td className='Symbol'>{val.symbol}</td>
              <td>${val.marketCap}</td>
              <td>${val.price.toFixed(2)}</td>
              <td>{val.availableSupply}</td>
              <td>{val.volume.toFixed(0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
   </>
  )
}

export default Table