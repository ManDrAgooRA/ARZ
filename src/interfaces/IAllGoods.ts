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

export interface IFetchGoods {
  limit: number;
  page: number;
  sort: string;
  order: string;
  countries: string[];
  categories: string[];
  minPrice: number;
  currentMaxPrice: number;
  handleOpen(): void;
}
