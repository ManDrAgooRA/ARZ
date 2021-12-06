import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate('/')}>
        Go back
      </button>
      <span>Page not found</span>
    </div>
  );
};

export default Error;
