import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
   
    
 
      return (
     <>
        <div className="flex justify-center items-center max-h-screen pt-16">
          <div className="w-96 p-6 shadow-lg rounded-2xl bg-gradient-to-r from-slate-200 to-slate-500 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us 😎 </h2>
            <p className="text-gray-600">
              Welcome to <strong> Recipe Finder</strong> – your ultimate
              destination for discovering delicious recipes with ease!
            </p>
            <p className="mt-2 text-gray-600">
              Whether you have specific ingredients at home or just want to explore
              new dishes, our app helps you find the perfect recipe in seconds.
            </p>
            <p className="mt-2 text-gray-600">
              Designed in <strong>2025</strong>, our goal is to make cooking fun, simple, and
              accessible for everyone. Start exploring and enjoy cooking like never
              before!
              <p>Made with ❤️ by <strong>Sazid khan</strong></p>
            </p>
            <NavLink to='/'><button className="bg-black   border-none  shadow-[0px_10px_30px_rgba(0,0,0,1)]   text-white font-bold w-24 h-11 rounded-2xl mt-3">⬅️ back</button></NavLink>
          </div>
        </div>
     </>
      );
    }
    
 
    

export default About