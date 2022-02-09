export interface IAdminInput {
  register(name: string): void;
  errorMessage: string;
}

export interface IProductImageInput {
  register(name: string): void;
  errorMessage: string;
  productImage: string;
  setProductImage(image: string | unknown): void;
}
