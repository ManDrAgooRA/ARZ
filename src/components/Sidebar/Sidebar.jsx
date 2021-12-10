import React from 'react';
import Sort from '../Sort/Sort';
import FilterByCountry from '../Filters/FilterByCountry/FilterByCountry';
import FilterByCategory from '../Filters/FilterByCategory/FilterByCategory';
import './sidebar.scss';

const MySydebar = () => {
  return (
    <div className="sidebar">
      <Sort />
      <FilterByCountry />
      <FilterByCategory />
    </div>
  );
};

export default MySydebar;
