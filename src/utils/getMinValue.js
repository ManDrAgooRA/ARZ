export const getMinValue = ({ allGoods = [] }) => {
  let minValue = '1';
  if (allGoods.length > 0) {
    minValue = +allGoods[0].price;

    allGoods.forEach((item) => {
      if (+item.price < +minValue) {
        minValue = item.price;
      }
    });
  }

  return +minValue;
};
