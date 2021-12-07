import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePage from '../pages/SinglePage/SinglePage';
import MainPage from '../pages/MainPage/MainPage';
import Error from '../pages/Error/Error';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="goods/:id" element={<SinglePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
