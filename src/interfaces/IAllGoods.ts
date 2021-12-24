export interface IAllGoods {
  limit: number,
  page: number,
  sort: string,
  order: string,
  countries: Array<string>,
  categories: Array<string>,
  minPrice: number,
  currentMaxPrice: number,
}
