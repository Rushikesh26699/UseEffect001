import React from 'react'
import '../CSS_files/Search.css'
import { useContext } from 'react'
import{Data} from '../App'
const Search = () => {
    const {search,setSearch}=useContext(Data)
  return (
    <>
    <div className='Search'>
        <input type="text" placeholder='Hungry For...' value={search} onChange={(e)=>{
            // console.log(e.target.value)
            setSearch(e.target.value)
            // console.log(search)

        }} />
        <button onClick={()=>{
            setSearch(search)
        }} >Search</button>
    </div>
    </>
  )
}

export default Search