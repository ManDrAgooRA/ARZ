export const errorsActions = {
  SET_ERROR_MESSAGE: '[ERRORS] set error message',
  CHANGE_MODAL_STATE: '[ERROS] change modal state',
};

export const setErrorMessage = (message: string) => ({
  type: errorsActions.SET_ERROR_MESSAGE,
  payload: message,
});

export const changeModalState = (state: boolean) => ({
  type: errorsActions.CHANGE_MODAL_STATE,
  payload: state,
});
