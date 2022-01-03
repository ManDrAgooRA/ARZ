import { IGoods } from '.';

export interface IAuthState {
  isLogin: boolean;
  userName: string;
  authError: string;
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
  isLoadGoods: boolean;
}