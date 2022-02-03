import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, DataTable, Heading } from 'grommet';
import {
  adminAllUserSelector,
  adminIsLoadingSelector,
} from '@/user/store/selectors';
import { CustomSpinner } from '@/sharedComponents/Spinner/Spinner';
import { getTableColumns } from '@/admin/utlis';
import { TabelPagination } from '@/admin/components/Tables/TabelPagination/TabelPagination';
import { allUsers } from '@/user/store/thunks/allUsers';
import '../tabel.scss';

export const UsersTabel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(params.page || 1);
  const [postsPerPage] = useState(2);
  const isLoadUsers = useSelector(adminIsLoadingSelector);
  const allTabelUsers = useSelector(adminAllUserSelector);
  const indexOfLastPost = +currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allTabelUsers.slice(indexOfFirstPost, indexOfLastPost);
  const pagesCount = Math.ceil(allTabelUsers.length / postsPerPage);

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  const handleChange = ({ page }: { page: number }) => {
    navigate(`/admin/users/${page}`);
    setCurrentPage(page);
  };

  if (isLoadUsers) {
    return <CustomSpinner />;
  }

  return (
    <Box align="center" className="table-wrapper">
      <Heading level={2}>All Users</Heading>
      <Box overflow="auto">
        <DataTable
          sortable
          data={currentPosts}
          columns={getTableColumns(allTabelUsers)}
          resizeable
          pin
        />
      </Box>
      <TabelPagination
        pagesCount={pagesCount}
        items={allTabelUsers}
        currentPage={+currentPage}
        handleChange={handleChange}
      />
    </Box>
  );
};
