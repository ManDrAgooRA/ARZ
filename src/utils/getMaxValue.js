export const getMaxValue = ({ allGoods = [] }) => {
  let maxValue = '1000';
  if (allGoods.length > 0) {
    maxValue = +allGoods[0].price;

    allGoods.forEach((item) => {
      if (+item.price > +maxValue) {
        maxValue = item.price;
      }
    });
  }

  return +maxValue;
};
