import React from 'react';
import Sort from '../Sort/Sort';
import FilterBy from '../Filters/FilterBy/FilterBy';
import { FILTERS } from '../../constants';
import FilterByPrice from '../Filters/FilterByPrice/FilterByPrice';
import './sidebar.scss';

const Sydebar = () => {
  return (
    <div className="sidebar">
      <Sort />
      {FILTERS.map((item) => {
        return <FilterBy filterName={item.name} />;
      })}
      <FilterByPrice />
    </div>
  );
};

export default Sydebar;
