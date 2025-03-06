
import React from 'react'
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Steps = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(data)
  useEffect(() => {
    const fetchRecipe = async () => {
      
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (response.data.meals) {
          setData(response.data.meals[0]); // Setting first meal object
        } else {
          setData(null);
        }
    
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-gray-700 rounded-2xl  bg-opacity-50 m-6 overflow-hidden">
      {!data ? (
        <p className="text-white">Loading.....</p>
      ) : (
        <>
      <div className="flex justify-center items-center flex-col gap-4">
      
        <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 p-6 rounded-lg shadow-lg text-black max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4">Ingredients 🌶️</h2>       
          <h3>{data.strIngredient1}-{data.strMeasure1}</h3> 
          <h3>{data.strIngredient2}-{data.strMeasure2}</h3> 
          <h3>{data.strIngredient3}-{data.strMeasure3}</h3>
          <h3>{data.strIngredient4}-{data.strMeasure4}</h3>
          <h3>{data.strIngredient5}-{data.strMeasure5}</h3>
          <h3>{data.strIngredient6}-{data.strMeasure6}</h3>
          <h3>{data.strIngredient7}-{data.strMeasure7}</h3>
          <h3>{data.strIngredient8}-{data.strMeasure8}</h3>
          <h3>{data.strIngredient9}-{data.strMeasure9}</h3>
          <h3>{data.strIngredient10}-{data.strMeasure10}</h3>
        </div>
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 p-6 rounded-lg shadow-lg text-black max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4">{data.strMeal} 🍔</h2>
          <p className="text-gray-700 mb-4">{data.strInstructions}</p>
          <p> country - {data.strArea}</p>
        <NavLink to='/'><button className="bg-black   border-none  shadow-[0px_10px_30px_rgba(0,0,0,1)]   text-white font-bold w-24 h-11 rounded-2xl mt-3">⬅️ back</button></NavLink>
        </div>
      </div>
         
         </>
      )}
    </div>
  );
};

export default Steps;
