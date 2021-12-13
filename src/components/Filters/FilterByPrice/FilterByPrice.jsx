import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Collapsible, RangeSelector, Stack, Text } from 'grommet';
import { CaretLeftFill } from 'grommet-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { setMinPrice, setMaxPrice } from '../../../store/actions';
import { getMinValue, getMaxValue } from '../../../utils';
import './filterByPrice.scss';

const schema = yup
  .object({
    minPrice: yup.number().required(),
    maxPrice: yup.number().required(),
  })
  .required();

const Thin = () => {
  const { goods, minPrice, maxPrice } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  const [range, setRange] = useState([
    getMinValue({ goods }),
    getMaxValue({ goods }),
  ]);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const changeValue = () => {
    dispatch(setMinPrice(range[0]));
    dispatch(setMaxPrice(range[1]));
  };

  const onSubmit = () => {
    changeValue();
  };

  useEffect(() => {
    dispatch(setMinPrice(+range[0]));
    dispatch(setMaxPrice(+range[1]));
  }, []);

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
        <div className="price-filter">
          <form onSubmit={handleSubmit(onSubmit)}>
            From:
            <input
              {...register('minValue')}
              value={range[0]}
              onChange={(e) => setRange([+e.target.value, range[1]])}
            />
            To:
            <input
              {...register('maxValue')}
              value={range[1]}
              onChange={(e) => setRange([range[0], +e.target.value])}
            />
            <button type="submit" className="btn">
              submit
            </button>
          </form>
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
