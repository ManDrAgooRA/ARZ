import React, { FC } from 'react';
import { Sort } from '../Sort/Sort';
import { FilterBy } from '../Filters/FilterBy/FilterBy';
import { FILTERS } from '../../constants';
import { FilterByPrice } from '../Filters/FilterByPrice/FilterByPrice';
import './sidebar.scss';

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <Sort />
      {FILTERS.map((item) => {
        return <FilterBy key={item.name} filterName={item.name} />;
      })}
      <FilterByPrice />
    </div>
  );
};