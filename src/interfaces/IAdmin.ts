import { IGoods } from '.';

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
