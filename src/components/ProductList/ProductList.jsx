import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../ProductCard/ProductCard';
import { getGoods } from '../../BusinessLogic';
import './products.scss';

const ProductList = () => {
  const size = useContext(ResponsiveContext);
  const [dataGoods, setDataGoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const goods = await getGoods();
      setDataGoods(goods);
    };

    getData();
  }, []);

  const getCountColumns = () => {
    let columnsGrid;
    if (size === 'large') {
      columnsGrid = '1/4';
    } else if (size === 'medium') {
      columnsGrid = '2/4';
    } else {
      columnsGrid = '100%';
    }

    return columnsGrid;
  };

  return (
    <Grommet pad="small">
      <Box className="products__list">
        <Grid gap="small" columns={getCountColumns()}>
          {dataGoods.map((item) => (
            <ProductCard pad="large" key={uuidv4()} item={item} />
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};

export default ProductList;
