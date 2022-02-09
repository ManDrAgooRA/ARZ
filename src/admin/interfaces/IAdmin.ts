import { IGoods } from '@/interfaces';

export interface IUsers {
  email: string;
  password: string;
  userName: string;
  phone: string;
  dateOfBirthDay: string;
  confirmPass: string;
  role: string;
  cart?: IGoods[];
}

export interface IAdminModal {
  isOpen: boolean;
  handleClose(): void;
}

export interface IAdminForm {
  currentForm: string;
  productId?: number;
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
