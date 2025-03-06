import React from 'react';
import { NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { user } = useUser(); // Clerk se logged-in user ka data fetch karega

  return (
    <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-full p-4 md:p-6 flex flex-wrap items-center justify-between text-white'>

      {/* Logo */}
      <NavLink to='/'>
        <h1 className='text-xl font-extrabold hover:text-gray-200 transition'>Food Finder 🍜</h1>
      </NavLink>

      {/* Buttons Section */}
      <div className='flex flex-wrap gap-3 items-center'>

        {/* About Us Button */}
        <NavLink to='/About'>
          <button className='py-2 px-6 bg-white bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full text-black font-semibold shadow-md hover:scale-105 transition'>
            About Us
          </button>
        </NavLink>

        {/* Sign In / User Profile */}
        <SignedOut>
          <SignInButton 
            mode="modal" 
            className="py-2 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-md font-semibold hover:scale-105 transition"
          >
            Sign Up
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition">
            {/* User Avatar (Balanced Size) */}
            <UserButton afterSignOutUrl="/" />

            {/* User Name / Email */}
            <span className="font-medium text-sm md:text-base text-white">
              {user?.fullName || user?.emailAddresses[0]?.emailAddress}
            </span>
          </div>
        </SignedIn>

      </div>

    </div>
  );
};

export default Navbar;
