function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getTableColumns = (array: any) => {
  let columns;
  if (array[0]) {
    columns = Object.keys(array[0]).map((item) => {
      if (item === 'password') {
        return {
          property: `${item}`,
          header: capitalizeFirstLetter(`${item}`),
          render: (datum: any) =>
            `${datum.password.slice(datum.password.length - 5)}...`,
        };
      }
      return {
        property: `${item}`,
        header: capitalizeFirstLetter(`${item}`),
      };
    });
  }
  return columns;
};
