export const fetchData = async () => {
  const response = await fetch(`${process.env.API_KEY}goods?_limit=20&_page=1`);
  return response;
};

export const fetchCurrentGoods = async (id) => {
  const response = await fetch(`${process.env.API_KEY}goods?id=${id}`);
  return response;
};
