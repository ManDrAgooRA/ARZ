import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Select } from 'grommet';
import { setSortSting } from '../../store/actions';

const Sort = () => {
  const dispatch = useDispatch();

  const options = [
    { label: 'Price ASC', value: 'Price ASC' },
    { label: 'Price DESC', value: 'Price DESC' },
    { label: 'Raiting ASC', value: 'Raiting ASC' },
    { label: 'Raiting DESC', value: 'Raiting DESC' },
  ];

  const handlerChange = (value) => {
    dispatch(setSortSting(value));
  };

  return (
    <Box fill align="center" justify="start">
      <Select
        name="select"
        placeholder="Sort By"
        options={options}
        labelKey="label"
        valueKey="value"
        onChange={({ option }) => handlerChange(option.value)}
      />
    </Box>
  );
};

export default Sort;
