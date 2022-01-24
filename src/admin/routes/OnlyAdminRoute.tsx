import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '@/pages/Login/Login';
import { authRole, authIsLogin } from '@/store/selectors';

export const OnlyAdminRoute: FC = () => {
  const userRole = useSelector(authRole);
  const isLogin = useSelector(authIsLogin);
  return userRole === 'admin' && isLogin ? <Outlet /> : <Login />;
};
