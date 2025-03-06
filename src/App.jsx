import React from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Recipe from './Components/Recipe'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {

 

  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  console.log(data.meals)
  
  const fetchRecipe = async (query) => {
    if (query.trim() === '') {
      setData([]);
      return;
    }

    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    if (response.data) {
      console.log(response.data);
      setData(response.data.meals);
    }
    
  };
  useEffect(() => {

      fetchRecipe(query)
   
  }, [query])
  





  return (
    
<>

   

<Navbar/>
<Search onSearch={setQuery} />
<Recipe data={data}/>


</>
  )
}

export default App