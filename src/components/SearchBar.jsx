import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-300 bg-white rounded-md px-4 py-2 pr-10 block w-full focus:outline-none focus:border-gray-500"
        placeholder="Search..."
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        {/* Heroicon name: search */}
        <svg
          className="h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8.5" cy="8.5" r="7.5" />
          <line x1="17" y1="17" x2="13.4" y2="13.4" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
