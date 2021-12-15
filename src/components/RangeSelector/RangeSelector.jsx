import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, RangeSelector, Stack, Text } from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { allGoodsSelector, goodsMaxPriceSelector } from '../../store/selectors';
import {
  setMinPrice,
  setMaxPrice,
  setCurrentMaxPrice,
} from '../../store/actions';
import { getMinMaxValue } from '../../utils';
import './rangeSelector.scss';

const schema = yup.object().shape({
  minValue: yup.number().positive().integer(),
  maxValue: yup.number().positive().integer(),
});

const MyRangeSelector = () => {
  const allGoods = useSelector(allGoodsSelector);
  const maxPrice = useSelector(goodsMaxPriceSelector);
  const dispatch = useDispatch();
  const { minValue, maxValue } = getMinMaxValue({ allGoods });
  const [range, setRange] = useState([minValue, maxValue]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      minValue,
      maxValue,
    },
  });

  const changeValue = () => {
    dispatch(setMinPrice(range[0]));
    dispatch(setCurrentMaxPrice(range[1]));
  };

  const onSubmit = () => {
    changeValue();
  };

  useEffect(() => {
    dispatch(setMinPrice(+range[0]));
    dispatch(setCurrentMaxPrice(+range[1]));
    dispatch(setMaxPrice(maxValue));
  }, []);

  return (
    <>
      <Stack>
        <div className="price-range">
          <RangeSelector
            direction="horizontal"
            min={1}
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
              type="number"
              value={range[0]}
              error={errors?.minValue?.message}
              onChange={(e) => setRange([+e.target.value, range[1]])}
            />
            To:
            <input
              {...register('maxValue')}
              type="number"
              value={range[1]}
              onChange={(e) => setRange([range[0], +e.target.value])}
            />
            <input type="submit" value="Ok" className="btn" />
          </form>
          {errors.minValue && (
            <p className="error">{errors.minValue.message}</p>
          )}
          {errors.maxValue && (
            <p className="error">{errors.maxValue.message}</p>
          )}
        </div>
      </Box>
    </>
  );
};

export default MyRangeSelector;
