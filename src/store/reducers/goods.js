// import { goodsActions } from '../actions';

export const initialState = {
  goods: [],
  selectedGoods: [{ name: 'goods', id: 2 }],
};

export function goods(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
