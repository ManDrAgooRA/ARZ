type IErrorMessage = {
  message: string;
};

export interface IInput {
  register(message: string): void;
  errors: {
    userName?: IErrorMessage;
    phone?: IErrorMessage;
    dateOfBirth?: IErrorMessage;
    email?: IErrorMessage;
    password?: IErrorMessage;
    confirmPass?: IErrorMessage;
  };
}
