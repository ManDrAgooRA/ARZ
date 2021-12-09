import React from 'react';
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter';
import './sidebar.scss';

const MySydebar = () => {
  return (
    <div className="sidebar">
      <Sort />
      <Filter />
    </div>
  );
};

export default MySydebar;
