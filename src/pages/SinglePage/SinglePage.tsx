import React, { FC, useState, useEffect } from 'react';
import { Grommet, Box, ResponsiveContext, Grid } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentGoods } from '@/store/thunks/goods';
import { CustomSpinner } from '@/components/Spinner/Spinner';
import { Modal } from '@/components/Modal/Modal';
import {
  selectedGoodsSelector,
  isLoadCurrentGoodsSelector,
  authError,
} from '@/store/selectors';
import './singlePage.scss';

export const SinglePage: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const selectedGoods = useSelector(selectedGoodsSelector);
  const isLoadCurrentGoods = useSelector(isLoadCurrentGoodsSelector);
  const error = useSelector(authError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    dispatch(fetchCurrentGoods(id || '0', handleOpen));
  }, []);

  if (isLoadCurrentGoods && !isOpenModal) {
    return <CustomSpinner />;
  }

  return (
    <Grommet>
      <Modal isOpen={isOpenModal} message={error} handleClose={handleClose} />
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
