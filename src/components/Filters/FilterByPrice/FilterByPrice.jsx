import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Collapsible, RangeSelector, Stack, Text } from 'grommet';
import { CaretLeftFill } from 'grommet-icons';
import { setMinPrice, setMaxPrice } from '../../../store/actions';
import { getMinValue, getMaxValue } from '../../../utils';
import './filterByPrice.scss';

const Thin = () => {
  const { goods, minPrice, maxPrice } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  const [range, setRange] = useState([minPrice, maxPrice]);

  useEffect(() => {
    dispatch(setMinPrice(getMinValue({ goods })));
    dispatch(setMaxPrice(getMaxValue({ goods })));
    // console.log(range);
    // console.log(minPrice);
    // console.log(maxPrice);
  }, []);

  const changeValue = () => {
    dispatch(setMinPrice(range[0]));
    console.log(minPrice);
  };

  return (
    <>
      <Stack>
        <div className="price-range">
          <RangeSelector
            direction="horizontal"
            min={minPrice}
            max={maxPrice}
            step={1}
            values={range}
            onChange={(nextRange) => {
              setRange(nextRange);
            }}
          />
        </div>
      </Stack>
      <Box align="center">
        <Text size="small">{`${minPrice}₴ - ${maxPrice}₴`}</Text>
        <Text size="small">{`${range[0]}₴ - ${range[1]}₴`}</Text>
        <div className="price-filter">
          <input
            type="text"
            value={range[0]}
            onChange={(e) => setRange([+e.target.value, maxPrice])}
          />
          <input
            type="text"
            value={range[1]}
            onChange={(e) => setRange([minPrice, +e.target.value])}
          />
          <button type="submit" className="btn" onClick={changeValue}>
            submit
          </button>
        </div>
      </Box>
    </>
  );
};

const FilterByPrice = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box align="start" gap="small">
        <button
          className="btn btn-price"
          type="button"
          onClick={() => setOpen(!open)}
        >
          Price
          <div className={open ? 'icon-price__active' : 'icon-price'}>
            <CaretLeftFill />
          </div>
        </button>
      </Box>
      <Collapsible open={open}>
        <Thin label="My Range Selector" />
      </Collapsible>
    </>
  );
};

export default FilterByPrice;
