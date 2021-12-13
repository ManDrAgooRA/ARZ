export const getMinValue = ({ goods = [] }) => {
  let minValue = '1';
  if (goods.length > 0) {
    minValue = +goods[0].price;

    goods.forEach((item) => {
      if (+item.price < +minValue) {
        minValue = item.price;
      }
    });
  }

  return +minValue;
};
