import React from 'react';
import { Box, Pagination } from 'grommet';
import { TGoodsUser } from '@/admin/interfaces';

export const TabelPagination = ({
  items,
  currentPage,
  handleChange,
}: {
  items: TGoodsUser[];
  currentPage: number;
  handleChange(e: any): void;
}) => {
  const pages = Math.ceil((+items.length - 1) / 20);
  return (
    <Box className="pagination-wrapper">
      <Pagination
        numberMiddlePages={2}
        numberItems={pages || 1}
        page={+currentPage}
        size="medium"
        step={1}
        onChange={handleChange}
      />
    </Box>
  );
};
