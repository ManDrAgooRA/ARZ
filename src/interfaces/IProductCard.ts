import { IGoods } from './IGoods';

export interface IProductCardItem {
  item: IGoods;
  changeCart(id: number, count: number): void;
  handleDelete(item: number): void;
}
