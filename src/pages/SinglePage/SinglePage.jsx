import React from 'react';
import { Grommet, Box, ResponsiveContext, Grid, Image } from 'grommet';
import { useSelector } from 'react-redux';
import './singlePage.scss';

const SinglePage = () => {
  const { selectedGoods } = useSelector((state) => state.goods);

  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            columns={size !== 'small' ? ['1/4', 'flex'] : ['full']}
            gap="small"
          >
            <Box className="card-img">
              <Image src={selectedGoods.image} />
            </Box>
            <Box className="card-content">
              <span>id: {selectedGoods.id}</span>
              <span>{selectedGoods.title}</span>
              <span>{selectedGoods.price}</span>
              <span>Catagory:</span>
              <ul>
                {selectedGoods.category.map((item) => {
                  return <li key={item.id}>{item.id}</li>;
                })}
              </ul>
              <span>Country: {selectedGoods.country}</span>
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default SinglePage;
