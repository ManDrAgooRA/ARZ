export interface IModal {
  isOpen: boolean;
  message: string;
  handleClose(): void;
}
