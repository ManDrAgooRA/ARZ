import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ADMIN_PATHS } from '@/admin/constants/routes';
import { GoodsTable } from '@/admin/components/Tables/GoodsTabel/GoodsTable';

export const AllAdminRoutes = () => {
  return (
    <Routes>
      <Route
        path={`${ADMIN_PATHS.adminGoods}/:page`}
        element={<GoodsTable />}
      />
    </Routes>
  );
};
