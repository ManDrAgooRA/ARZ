import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBoxGroup, Heading } from 'grommet';
import PropTypes from 'prop-types';
import {
  goodsSelector,
  goodsCategoriesSelector,
  goodsCountriesSelector,
} from '../../../store/selectors';
import { setCategories, setCountries } from '../../../store/actions';
import { getUniqueData } from '../../../utils';
import './filter.scss';

const FilterBy = ({ filterName }) => {
  const goods = useSelector(goodsSelector);
  const filterParam = useSelector(
    filterName === 'categories'
      ? goodsCategoriesSelector
      : goodsCountriesSelector
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState(filterParam);

  useEffect(() => {
    dispatch(
      filterName === 'categories' ? setCategories(value) : setCountries(value)
    );
  }, [value]);

  return (
    <>
      <Heading level="3">
        Filter by {filterName}: {goods.length}
      </Heading>
      <div className="filter">
        <CheckBoxGroup
          id="check-box-group-id"
          name="controlled"
          aria-labelledby="check-box-formfield-id"
          value={value}
          onChange={({ value: nextValue }) => setValue(nextValue)}
          options={getUniqueData({ uniqueData: `${filterName}`, goods })}
        />
      </div>
    </>
  );
};

FilterBy.propTypes = {
  filterName: PropTypes.string,
};

export default FilterBy;
