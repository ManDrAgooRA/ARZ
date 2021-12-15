import React, { useState } from 'react';
import { Box, Collapsible } from 'grommet';
import { CaretLeftFill } from 'grommet-icons';
import PriceRange from '../../RangeSelector/RangeSelector';
import './filterByPrice.scss';

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
        <PriceRange label="My Range Selector" />
      </Collapsible>
    </>
  );
};

export default FilterByPrice;
