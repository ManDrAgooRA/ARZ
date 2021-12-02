import React from 'react';

const ProductList = () => {
  const dataFromServer = async () => {
    return (
      await fetch('http://localhost:3004/goods?_limit=20&_page=1')
    ).json();
  };

  const getData = async () => {
    let users = [];
    users = await dataFromServer();
    return users;
  };

  // console.log(getData());
  getData();
  // getData();
  return (
    <>
      {/* {getData()} */}
      {/* {getData()} */}
    </>
  );
};

export default ProductList;
