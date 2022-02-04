export interface IRequestBodyAdmin {
  requestBody: {
    title?: string;
    productImage?: string;
    categories?: string;
    price?: number;
    raiting?: number;
    countries?: string;
    isFavorite?: boolean;
    description?: string;
    isSale?: boolean;
  };
}
