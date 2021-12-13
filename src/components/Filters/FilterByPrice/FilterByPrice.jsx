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
    console.log(range);
  }, [dispatch, goods, range, minPrice, maxPrice]);

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
        <Text size="small">{`${range[0]}₴ - ${range[1]}₴`}</Text>
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
