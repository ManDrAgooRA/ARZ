export interface IAdminModal {
  isOpen: boolean;
  handleClose(): void;
}

export interface IAdminForm {
  currentForm: string;
  productId?: number;
  userId?: number;
}

export interface IEditRequest {
  id: number;
  requestBody: {
    title: string;
    price: number;
    categories: string;
    countries: string;
    description: string;
    isFavorite: boolean;
    productImage: string;
    isSale: boolean;
    raiting: number;
  };
}
