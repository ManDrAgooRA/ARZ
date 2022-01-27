export interface IFetchGoods {
  limit: number;
  page: number | string;
  sort?: string;
  order?: string;
  countries?: string[];
  categories?: string[];
  minPrice?: number;
  currentMaxPrice?: number;
}
