import React, { useEffect, useState } from 'react';
import FilterSideBar from '../components/SearchPage/FilterSideBar';
import List from '../components/SearchPage/List';
import SearchBar from '../components/SearchPage/SearchBar';
import { dataList } from '../Data/SearchResults';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {

  const location = useLocation()
  const { AlbaniaCheck } = location.state
  const { MacedoniaCheck } = location.state
  const { KosovoCheck } = location.state
  const { MontenegroCheck } = location.state

  const [countries, setCountries] = useState([
    { id: 1, checked: (AlbaniaCheck), label: 'Albania' },
    { id: 2, checked: (KosovoCheck), label: 'Kosovo' },
    { id: 3, checked: (MacedoniaCheck), label: 'North Macedonia' },
    { id: 4, checked: (MontenegroCheck), label: 'Montenegro' },
  ]);


  const [ratings, setRatings] = useState([
    { id: 1, checked: false, label: '1 Star' },
    { id: 2, checked: false, label: '2 Stars' },
    { id: 3, checked: false, label: '3 Stars' },
    { id: 4, checked: false, label: '4 Stars' },
    { id: 5, checked: false, label: '5 Stars' },
  ]);  

  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: 'Place' },
    { id: 2, checked: false, label: 'Event' },
  ]);  

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleChangeChecked = (id) => {
    const countriesStateList = countries;
    const changeCheckedCountries = countriesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCountries(changeCheckedCountries);
  };

  const handleChangeCheckedRatings = (id) => {
    const ratingsStateList = ratings;
    const changeCheckedRatings = ratingsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setRatings(changeCheckedRatings);
  };

  const handleChangeCheckedCategories = (id) => {
    const categoriesStateList = categories;
    const changeCheckedCategories = categoriesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategories(changeCheckedCategories);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Country Filter
    const countriesChecked = countries
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (countriesChecked.length) {
      updatedList = updatedList.filter((item) =>
        countriesChecked.includes(item.country)
      );
    }

    // Ratings Filter
    const ratingsChecked = ratings
      .filter((item) => item.checked)
      .map((item) => item.id);

    if (ratingsChecked.length) {
      updatedList = updatedList.filter((item) =>
        ratingsChecked.includes(item.rating)
      );
    }

    // Categories Filter
    const categoriesChecked = categories
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoriesChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoriesChecked.includes(item.category)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [countries, searchInput, ratings, categories]);
  return (
    
    <div className='flex flex-col bg-slate-100'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='flex flex-1 overflow-y-auto'>
        {/* Filter Panel */}
        <div className='hidden md:block p-4 basis-80 overflow-y-auto'>
          <FilterSideBar
            countries={countries}
            changeChecked={handleChangeChecked}
            ratings={ratings}
            changeCheckedRatings={handleChangeCheckedRatings}
            categories={categories}
            changeCheckedCategories={handleChangeCheckedCategories}
          />
        </div>
        {/* List*/}
        <div className='p-4 flex-1 overflow-y-auto'>
        <List list={list} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
