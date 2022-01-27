import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ADMIN_PATHS } from '@/admin/constants/routes';
import { Tabel } from '../components/Table/Table';

export const AllAdminRoutes = () => {
  return (
    <Routes>
      <Route path={`${ADMIN_PATHS.adminGoods}/:page`} element={<Tabel />} />
    </Routes>
  );
};
