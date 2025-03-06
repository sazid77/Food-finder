import React from 'react'
import Tilt from 'react-parallax-tilt';
import { NavLink } from 'react-router-dom'

const Recipe = ({data}) => {
  return (
    <>
       <div className="container mx-auto px-4 overflow-x-hidden">
       <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-7'> 

       {!data?"Loading....":     data.map((item,index)=>{
        return (<Tilt>
          <div key={index} className=' bg-white glow-card shadow-lg rounded-lg p-4 text-center m-5 flex items-center justify-center flex-col hover: border-blue-500'>
        <div className='w-72 h-52  '><img className='w-full h-full object-cover rounded-lg'  src={item.strMealThumb} alt="" /></div>
        <div className=' '>
        <p className='font-bold'>{item.strMeal}</p>
        <p>{item.strArea}</p>
        <NavLink to={`${item.idMeal}`}  className={({isActive})=>isActive?'active-link':''}  > <button className='px-6 mt-4 rounded-lg  py-3 bg-blue-500 text-white text-sm '>View Recipe</button></NavLink>
        </div>
        </div>
        </Tilt>
        )
       })}
      </div>
      </div>
    </>
  )
}

export default Recipe




