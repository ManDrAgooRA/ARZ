import { IGoods } from '@/interfaces';

export interface IUSers {
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
  curentForm: string;
  productId?: number;
}
