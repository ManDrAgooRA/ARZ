import React from 'react';
import { Box, Pagination } from 'grommet';

export const TabelPagination = ({
  items,
  currentPage,
  handleChange,
  pagesCount,
}: {
  items: object[];
  currentPage: number;
  handleChange(e: any): void;
  pagesCount?: number;
}) => {
  const pages = pagesCount || Math.ceil(items.length / 20);

  return (
    <Box className="pagination-wrapper">
      <Pagination
        numberMiddlePages={2}
        numberItems={pages}
        page={+currentPage}
        size="medium"
        step={1}
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
};
