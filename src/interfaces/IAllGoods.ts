export interface IAllGoods {
  limit: number;
  page: number;
  sort: string;
  order: string;
  countries: string[];
  categories: string[];
  minPrice: number;
  currentMaxPrice: number;
}