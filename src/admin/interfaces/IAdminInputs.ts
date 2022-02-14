export interface IAdminRadio {
  register(name: string): void;
  errorMessage: string;
  setIsSaleValue(value: boolean): void;
  isSaleValue: boolean;
}

export interface IProductImageInput {
  register(name: string): void;
  errorMessage: string;
  productImage: string;
  setProductImage(image: string): void;
}
