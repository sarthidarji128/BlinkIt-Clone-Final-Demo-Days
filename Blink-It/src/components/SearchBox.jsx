import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchBox.css';  


const SearchBox = () => {
  return (
    <div className="searchbox-relative">
      <FiSearch className="absolute-icon" size={24} />
      <input
        type="text"
        placeholder="Search for products"
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;
