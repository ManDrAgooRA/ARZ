import React, { useEffect } from 'react';
import { Grommet, Box, ResponsiveContext, Grid } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentGoods } from '../../store/thunks/goods';
import { clearCurrentUser } from '../../store/actions';
import { MySpinner } from '../../components/MySpinner/MySpinner';
import './singlePage.scss';

const SinglePage = () => {
  const { selectedGoods, isLoadCurrentGoods } = useSelector(
    (state) => state.goods
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCurrentGoods(id));
    return () => {
      dispatch(clearCurrentUser());
    };
  }, [dispatch, id]);

  if (isLoadCurrentGoods) {
    return <MySpinner />;
  }

  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            columns={size !== 'small' ? ['1/4', 'flex'] : ['full']}
            gap="small"
          >
            <Box className="card-img">
              <img src={selectedGoods.image} alt={selectedGoods.title} />
            </Box>
            <Box className="card-content">
              <button
                className="btn btn-back"
                type="button"
                onClick={() => navigate('/')}
              >
                Go back
              </button>
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
