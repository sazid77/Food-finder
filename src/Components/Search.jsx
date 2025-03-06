import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleQuery = () => {
    onSearch(input);
  };

  return (
    <div className="m-10 flex flex-col items-center space-y-4">

      {/* Search Input */}
      <input
        onChange={(e) => setInput(e.target.value)}
        className="w-full md:w-2/3 bg-white/30 backdrop-blur-lg p-4 text-white border border-gray-300 
        rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 
        placeholder-black transition-all duration-300 ease-in-out"
        type="text"
        placeholder="🍕 Search your favorite recipe..."
      />

      {/* Search Button */}
      <button
        onClick={handleQuery}
        className="w-full md:w-2/3 px-6 py-3 text-lg font-semibold text-white 
        bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 
        rounded-full shadow-lg hover:scale-105 hover:shadow-xl 
        transition-all duration-300 ease-in-out"
      >
        🔍 Search
      </button>

    </div>
  );
};

export default Search;
