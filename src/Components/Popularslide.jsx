import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const Popularslide = () => {
 const [data, setdata] = useState([])
 console.log(data[0]?.strMeal)
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  useEffect(() => {
    const fetchRecipe=async()=>{
      const response= await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
      console.log(response.data)
      setdata(response.data.meals)
      console.log(data.strMeal)
    }
  
   fetchRecipe()
  }, [])
  




  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item,index)=>{
          return(
            <div key={index} className='bg-white glow-card shadow-lg rounded-lg p-4 text-center  flex items-center justify-center flex-col hover: border-blue-500'>
            <div className='w-full h-40 p-5  '><img className='w-full h-full  object-cover rounded-lg'  src={item.strMealThumb} alt="" /></div>
            <div className=' '>
            <p className='font-bold'>{item.strMeal}</p>
            <p>{item.strArea}</p>
            </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Popularslide