export const getMinMaxValue = ({ allGoods }) => {
  const [itemWithValueMin] = allGoods.sort((a, b) => a.price - b.price);
  const [itemWithValueMax] = allGoods.sort((a, b) => b.price - a.price);

  return {
    minValue: itemWithValueMin.price,
    maxValue: itemWithValueMax.price,
  };
};
