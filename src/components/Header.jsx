// Header.jsx

import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-8 inset-x-0 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">ToonAtlas</h1>
        </div>
        <div className="w-1/2">
          <SearchBar />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
