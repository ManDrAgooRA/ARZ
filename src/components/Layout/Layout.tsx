import React, { FC, useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { AppBar } from '@/components/AppBar/AppBar';
import { Footer } from '@/components/Footer/Footer';
import { ILayout } from '@/interfaces/ILayout';
import { STRIPE_PUBCLICK_KEY, STRIPE_SECRET_KEY } from '@/constants';
import './layout.scss';

const stripePromise = loadStripe(STRIPE_PUBCLICK_KEY);

export const Layout: FC<ILayout> = ({ children }) => {
  const options = {
    clientSecret: STRIPE_SECRET_KEY,
  };

  return (
    <>
      <AppBar />
      <div className="layout">
        <Elements stripe={stripePromise}>{children}</Elements>
      </div>
      <Footer />
    </>
  );
};
