import React from 'react';
import DropdownFilter from './DropDownFilter';

const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap flex items-center bg-white h-16 border-b border-slate-200 py-6 px-4'>
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6 mr-2 ml-2 text-gray-300"
    >
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
    <input
      type='text'
      className='text-2xl w-full outline-0 border-0'
      placeholder='Sunny Hill Festival'
      
      value={value}
      onChange={changeInput}
    />
    <DropdownFilter />
  </div>
);

export default SearchBar;
