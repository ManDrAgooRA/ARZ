export const getQuery = ({ limit, page, sortBy }) => {
  const sort = sortBy.split(' ')[0].toLowerCase();
  const order = sortBy.split(' ')[1];

  return `_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`;
};
