export interface IInput {
  register(message: string): void;
  errorMessage: string;
}

export interface ICartInput {
  value: number;
  onChange(value: string): void;
}
