export const getQuery = ({
  limit = 20,
  page = 1,
  sortBy = '',
  countries = '',
  categories = '',
}) => {
  let fliterByCountries = '';
  let fliterByCategories = '';
  if (countries) {
    fliterByCountries = countries.join('');
  }

  if (categories) {
    fliterByCategories = categories.join('');
  }

  const sort = sortBy.split(' ')[0].toLowerCase();
  const order = sortBy.split(' ')[1];

  return `_limit=${limit}&_page=${page}
  &_sort=${sort}&_order=${order}&countries_like=${fliterByCountries}&categories_like=${fliterByCategories}`;
  // return `_limit=20&_page=1&_sort=&_order=&countries_like=&categories_like=${fliterByCategories}`;
};
