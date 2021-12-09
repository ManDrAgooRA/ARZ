export const getQuery = ({
  limit = 20,
  page = 1,
  sortBy = 'Raitnig DESC',
  countries = '',
}) => {
  let fliterByCountries = '';
  if (countries) {
    fliterByCountries = countries.join('');
  }
  const sort = sortBy.split(' ')[0].toLowerCase();
  const order = sortBy.split(' ')[1];

  return `_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}&countries_like=${fliterByCountries}`;
};
