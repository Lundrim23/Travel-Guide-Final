import React from 'react';
import CheckboxElement from './CheckboxElement';

const FilterSideBar = ({
  countries,
  changeChecked,
  ratings,
  changeCheckedRatings,
  categories,
  changeCheckedCategories
}) => (
  <div className='ml-2 pl-5 pr-5 bg-white border border-slate-200'>
    <div className='mb-8 pr-0'>
      <p className='m-2 mb-3 pt-2 text-base font-medium w-full ml-0'>Category</p>
      {categories.map((category) => (
        <CheckboxElement
          key={category.id}
          element={category}
          changeChecked={changeCheckedCategories}
        />
      ))}
    </div>
    <div className="pt-3 space-y-2 border-t border-gray-200 w-full" ></div>
    <div className='mb-8 pr-0'>
      <p className='m-2 mb-3 pt-2 text-base font-medium w-full ml-0'>Country</p>
      {countries.map((country) => (
        <CheckboxElement
          key={country.id}
          element={country}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className="pt-3 space-y-2 border-t border-gray-200" ></div>
    <div className='mb-8 pr-0'>
      <p className='m-2 mb-3 pt-2 text-base font-medium w-full ml-0'>Rating</p>
      {ratings.map((rating) => (
        <CheckboxElement
          key={rating.id}
          element={rating}
          changeChecked={changeCheckedRatings}
        />
      ))}
    </div>
  </div>
);

export default FilterSideBar;
