import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBoxGroup, Heading } from 'grommet';
import { setCategories } from '../../../store/actions';
import { getUniqueData } from '../../../utils';

const FilterByCountry = () => {
  const { goods, categories } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  const [value, setValue] = useState(categories);

  useEffect(() => {
    dispatch(setCategories(value));
  }, [value, goods, dispatch]);

  return (
    <>
      <Heading level="3">Filter by categories: {goods.length}</Heading>
      <div className="filter">
        <CheckBoxGroup
          id="check-box-group-id"
          name="controlled"
          aria-labelledby="check-box-formfield-id"
          value={value}
          onChange={({ value: nextValue }) => setValue(nextValue)}
          options={getUniqueData({ uniqueData: 'categories', goods })}
        />
      </div>
    </>
  );
};

export default FilterByCountry;
