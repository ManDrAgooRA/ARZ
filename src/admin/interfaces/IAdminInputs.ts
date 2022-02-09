export interface IAdminInput {
  register(name: string): void;
  errorMessage: string | undefined;
}

export interface IAdminRadio {
  register(name: string): void;
  errorMessage: string | undefined;
  setRadioValue(value: boolean | unknown): void;
  radioValue: boolean | unknown;
}

export interface IProductImageInput {
  register(name: string): void;
  errorMessage: string | undefined;
  productImage: string;
  setProductImage(image: string | unknown): void;
}
