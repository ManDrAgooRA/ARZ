interface IErrorMessage {
  message: string | unknown;
}

interface IErrorInputs {
  categories?: IErrorMessage;
  title?: IErrorMessage;
  productImage?: IErrorMessage;
  price?: IErrorMessage;
  raiting?: IErrorMessage;
  countires?: IErrorMessage;
  description?: IErrorMessage;
  isSale?: IErrorMessage;
}

export interface IAdminInputs {
  register(message: string): void;
  errors: IErrorInputs;
  value: string | number | readonly string[] | undefined;
}

export interface IImageInput {
  register(message: string): void;
  errors: IErrorInputs;
  productImage: string;
  setProductImage(base64: string | unknown): void;
  value: string | number | readonly string[] | undefined;
}
