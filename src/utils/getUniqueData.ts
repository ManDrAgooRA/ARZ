import { IGoods } from '../interfaces';

export const getUniqueData = (
  uniqueData: string,
  goods: IGoods[]
): string[] => {
  const uniqueArr = [];
  const uniqueValue = uniqueData;

  goods.forEach((item) => {
    uniqueArr.push(item[uniqueValue]);
  });

  return uniqueArr.filter((elem, i) => {
    return uniqueArr.indexOf(elem, i + 1) === -1;
  });
};
