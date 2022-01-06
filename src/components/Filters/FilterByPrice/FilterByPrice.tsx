import React, { FC, useState } from 'react';
import { Box, Collapsible } from 'grommet';
import { CaretLeftFill } from 'grommet-icons';
import { PriceRange } from '@/components/RangeSelector/RangeSelector';
import './filterByPrice.scss';

export const FilterByPrice: FC = () => {
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
        <PriceRange />
      </Collapsible>
    </>
  );
};
