import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBoxGroup, Heading } from 'grommet';
import {
  goodsSelector,
  goodsCountriesSelector,
} from '../../../store/selectors';
import { setCountries } from '../../../store/actions';
import { getUniqueData } from '../../../utils';
import './filter.scss';

const FilterByCountry = () => {
  const goods = useSelector(goodsSelector);
  const countries = useSelector(goodsCountriesSelector);
  const dispatch = useDispatch();
  const [value, setValue] = useState(countries);

  useEffect(() => {
    dispatch(setCountries(value));
  }, [value]);

  return (
    <>
      <Heading level="3">Filter by countries: {goods.length}</Heading>
      <div className="filter">
        <CheckBoxGroup
          id="check-box-group-id"
          name="controlled"
          aria-labelledby="check-box-formfield-id"
          value={value}
          onChange={({ value: nextValue }) => setValue(nextValue)}
          options={getUniqueData({ uniqueData: 'countries', goods })}
        />
      </div>
    </>
  );
};

export default FilterByCountry;
