export interface IProductCard {
  categories: string;
  count: number;
  countries: string;
  description: string;
  id: number;
  isFavorite: boolean;
  image: string;
  isSale: boolean;
  price: number;
  raiting: number;
  salePrice: number;
  title: string;
}

export interface IProductCardItem {
  item: IProductCard;
}
