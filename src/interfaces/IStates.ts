import { IGoods } from '.';

export interface IAuthState {
  isLogin: boolean;
  userName: string;
  role: string;
}

export interface IGoodsState {
  allGoods: IGoods[];
  goods: IGoods[];
  selectedGoods: IGoods;
  sort: string;
  order: string;
  countries: string[];
  categories: string[];
  minPrice: number;
  maxPrice: number;
  currentMaxPrice: number;
  isLoadCurrentGoods: boolean;
  isLoadAllGoods: boolean;
  isLoadGoods: boolean;
}

export interface ICartState {
  cart: IGoods[];
}

export interface IErrorState {
  isOpenModal: boolean;
  error: string;
}
