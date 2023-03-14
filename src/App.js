import React, { useState, useEffect } from 'react'
import '../src/CSS_files/App.css';
import Search from './Components/Search';
import { createContext } from 'react';
import Result from './Components/Result';

export const Data = createContext();

function App() {

  const [search, setSearch] = useState("")
  const [apiresult, SetApiresult] = useState([])

  useEffect(() => {

    call()

  },[search])

  // const url=

  async function call() {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=d0d7bc25&app_key=8b2bff8bc01f609505a0f1b701111946`)

    // console.log( await res.json());
    const result = await res.json()
    // console.log(result.hits);
    SetApiresult(result.hits)

  }


  return (
    <>
      <Data.Provider value={{ search, setSearch}}>
        <div className="App">
          <div className='searchdiv'>
            <Search />
           
          </div>
          <div className='showResult'>
            <Result apiresult={apiresult}
SetApiresult={SetApiresult}  />

          </div>
        </div>

      </Data.Provider>
    </>
  );
}

export default App;