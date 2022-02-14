export interface IAdminRadio {
  register(name: string): void;
  errorMessage: string;
  setRadioValue(value: boolean): void;
  radioValue: boolean;
}

export interface IProductImageInput {
  register(name: string): void;
  errorMessage: string;
  productImage: string;
  setProductImage(image: string): void;
}
