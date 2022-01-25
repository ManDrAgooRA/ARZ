import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '@/user/pages/Login/Login';
import { ROLES } from '@/constants';
import { authRole, authIsLogin } from '@/user/store/selectors';

export const OnlyAdminRoute: FC = () => {
  const userRole = useSelector(authRole);
  const isLogin = useSelector(authIsLogin);
  return userRole === ROLES.admin && isLogin ? <Outlet /> : <Login />;
};
