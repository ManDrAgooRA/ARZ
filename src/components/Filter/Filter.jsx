import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBoxGroup, Heading } from 'grommet';
import { setCountries, setSelectedCountry } from '../../store/actions';
import { getUniqueCountries } from '../../utils/getUniqueCountries';
import './filter.scss';

const Filter = () => {
  const { goods, selectedCountry } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  const [value, setValue] = useState(selectedCountry);

  useEffect(() => {
    dispatch(setCountries(value));
    dispatch(setSelectedCountry(value));
  }, [value, dispatch]);

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
          options={getUniqueCountries({ goods })}
        />
      </div>
    </>
  );
};

export default Filter;
