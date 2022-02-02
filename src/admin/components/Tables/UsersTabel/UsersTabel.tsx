import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, DataTable, Heading } from 'grommet';
import {
  adminIsLoadingSelector,
  adminAllUserSelector,
} from '@/user/store/selectors';
import { CustomSpinner } from '@/sharedComponents/Spinner/Spinner';
import { getTableColumns } from '@/admin/utlis';
import { allUsers } from '@/user/store/thunks/allUsers';

export const UsersTabel = () => {
  const params = useParams();
  const navigate = useNavigate();
  const isLoadGoods = useSelector(adminIsLoadingSelector);
  const allTabelUsers = useSelector(adminAllUserSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  if (isLoadGoods) {
    return <CustomSpinner />;
  }

  return (
    <Box align="center" className="table-wrapper">
      <Heading level={2}>All Users</Heading>
      <Box overflow="auto">
        <DataTable
          sortable
          data={allTabelUsers}
          columns={getTableColumns(allTabelUsers)}
          resizeable
          pin
        />
      </Box>
    </Box>
  );
};
