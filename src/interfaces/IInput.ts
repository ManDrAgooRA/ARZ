export interface IInput {
  register(message: string): void;
  errorMessage: string | undefined;
}

export interface ICartInput {
  value: number;
  onChange(value: string): void;
}

export interface IDateInput {
  register(message: string): void;
  errorMessage: string | undefined;
  dateValue: string;
  setDateValue(date: string): void;
}
