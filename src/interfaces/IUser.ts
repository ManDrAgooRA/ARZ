import { IGoods } from '.';

export interface IUser {
  id?: number;
  userName?: string;
  phone?: string;
  dateOfBirthDay?: string;
  email?: string;
  password: string;
  confirmPass?: string;
  role?: string;
  cart?: IGoods[];
  favorites: number[];
}

export interface IUserData {
  requestBody: IUser;
}

export interface ISignUpUser {
  requestBody: IUser;
  handleNavigate(params: string): void;
}

export interface IUserResponseUser {
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  confirmPass: string;
  userName: string;
  id: number;
}

export interface IUserResponse {
  accessToken: string;
  user: IUserResponseUser;
}
