export const getUniqueData = ({ uniqueData, goods = [] }) => {
  const countriesArr = [];
  const uniqueValue = uniqueData;

  goods.forEach((item) => {
    countriesArr.push(item[uniqueValue]);
  });

  return countriesArr.filter((elem, i) => {
    return countriesArr.indexOf(elem, i + 1) === -1;
  });
};
