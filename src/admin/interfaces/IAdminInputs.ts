interface IErrorMessage {
  message: string;
}

export interface IAdminInputs {
  register(message: string): void;
  errors: {
    categories?: IErrorMessage;
    title?: IErrorMessage;
    productImage?: IErrorMessage;
    price?: IErrorMessage;
    raiting?: IErrorMessage;
    countires?: IErrorMessage;
    description?: IErrorMessage;
    isSale?: IErrorMessage;
  };
}

export interface IImageInput {
  register(message: string): void;
  errors: {
    productImage?: IErrorMessage;
  };
  productImage: string;
  setProductImage(base64: string | unknown): void;
}
