import { IGoods } from '@/interfaces';

export const getUniqueData = (
  uniqueData: string,
  goods: IGoods[]
): string[] => {
  const uniqueArr: string[] = [];
  const uniqueValue = uniqueData;

  goods.forEach((item: IGoods) => {
    uniqueArr.push(item[uniqueValue]);
  });

  return uniqueArr.filter((elem, i) => {
    return uniqueArr.indexOf(elem, i + 1) === -1;
  });
};
