import React, { useEffect } from 'react';
import { Grommet, Box, ResponsiveContext, Grid } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentGoods } from '../../store/thunks/goods';
import { clearCurrentUser } from '../../store/actions';
import { MySpinner } from '../../components/MySpinner/MySpinner';
import {
  selectedGoodsSelector,
  isLoadCurrentGoodsSelector,
} from '../../store/selectors';
import './singlePage.scss';

export const SinglePage = () => {
  const selectedGoods = useSelector(selectedGoodsSelector);
  const isLoadCurrentGoods = useSelector(isLoadCurrentGoodsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCurrentGoods(id));
    return () => {
      dispatch(clearCurrentUser());
    };
  }, [id]);

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
              <span>{selectedGoods.price}₴</span>
              <span>Catagory: {selectedGoods.categories}</span>
              <span>Country: {selectedGoods.countries}</span>
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
