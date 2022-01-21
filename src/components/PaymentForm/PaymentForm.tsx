import React, { FC } from 'react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
} from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '@/store/actions';

export const PaymentForm: FC = () => {
  // const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  const handleCardElementChange = async ({ elementType, error, complete }) => {
    console.log(elementType);
    console.log(error);
    console.log(complete);
    if (error) {
      alert(error.message);
    }
    if (complete) {
      alert('Payment was success');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardCvcElement />
      <CardExpiryElement />
      <CardNumberElement onChange={handleCardElementChange} />
      {/* <PaymentElement /> */}
      <button type="submit">pay</button>
    </form>
  );
};
