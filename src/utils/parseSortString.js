export const parsSortString = (string) => {
  const sort = string.split(' ')[0].toLowerCase();
  const order = string.split(' ')[1];

  return `&_sort=${sort}&_order=${order}`;
};
