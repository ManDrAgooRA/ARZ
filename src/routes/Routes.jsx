import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SinglePage from '../pages/SinglePage/SinglePage';
import MainPage from '../pages/MainPage/MainPage';
import SignUp from '../pages/SignUp/SignUp';
import Error from '../pages/Error/Error';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="goods/:id" element={<SinglePage />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MyRoutes;
