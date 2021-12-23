export const getMinMaxValue = ({ allGoods }) => {
  const [itemWithValueMin] = allGoods.sort((a, b) => a.price - b.price);
  const [itemWithValueMax] = allGoods.sort((a, b) => b.price - a.price);

  return {
    minValue:
      typeof itemWithValueMin.price === 'number' ? itemWithValueMin.price : 1,
    maxValue:
      typeof itemWithValueMax.price === 'number'
        ? itemWithValueMax.price
        : 1000,
  };
};
