import React from 'react';
import Sort from '../Sort/Sort';
import FilterByCountry from '../Filters/FilterByCountry/FilterByCountry';
import FilterByCategory from '../Filters/FilterByCategory/FilterByCategory';
import FilterByPrice from '../Filters/FilterByPrice/FilterByPrice';
import './sidebar.scss';

const MySydebar = () => {
  return (
    <div className="sidebar">
      <Sort />
      <FilterByCountry />
      <FilterByCategory />
      <FilterByPrice />
    </div>
  );
};

export default MySydebar;
