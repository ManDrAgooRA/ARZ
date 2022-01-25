import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardPage } from '@/pages/CardPage/CardPage';
import { MainPage } from '@/pages/MainPage/MainPage';
import { SignUp } from '@/pages/SignUp/SignUp';
import { Cart } from '@/pages/Cart/Cart';
import { Login } from '@/pages/Login/Login';
import { Error } from '@/pages/Error/Error';

export const AllRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="goods/:id" element={<CardPage />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
