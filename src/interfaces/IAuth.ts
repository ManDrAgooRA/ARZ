import { IGoods } from '.';

export interface IUser {
  userName?: string;
  phone?: string;
  dateOfBirthDay?: string;
  email?: string;
  password: string;
  confirmPass?: string;
  role?: string;
  cart?: IGoods[];
}

export interface IAuthData {
  requestBody: IUser;
}

export interface IAuth {
  requestBody: IUser;
  handleNavigate(params: string): void;
}

export interface IAuthResponseUser {
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  confirmPass: string;
  userName: string;
  id: number;
}

export interface IAuthResponse {
  accessToken: string;
  user: IAuthResponseUser;
}
