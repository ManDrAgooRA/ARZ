export const getMaxValue = ({ goods }) => {
  let maxValue = '1000';
  if (goods.length > 0) {
    maxValue = +goods[0].price;

    goods.forEach((item) => {
      if (+item.price > +maxValue) {
        maxValue = item.price;
      }
    });
  }

  return +maxValue;
};
