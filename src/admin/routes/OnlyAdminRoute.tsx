import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '@/user/pages/Login/Login';
import { ROLES } from '@/constants';
import { userRoleSelector, userIsLogin } from '@/user/store/selectors';

export const OnlyAdminRoute: FC = () => {
  const userRole = useSelector(userRoleSelector);
  const isLogin = useSelector(userIsLogin);
  return userRole === ROLES.admin && isLogin ? <Outlet /> : <Login />;
};
