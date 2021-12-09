export const getUniqueCountries = ({ goods = [] }) => {
  const countriesArr = [];

  goods.forEach((item) => {
    countriesArr.push(item.countries);
  });

  const uniqueCountries = countriesArr.filter((elem, i) => {
    return countriesArr.indexOf(elem, i + 1) === -1;
  });
  return uniqueCountries;
};
