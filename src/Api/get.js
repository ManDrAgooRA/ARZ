export const fetchData = async () => {
  const response = await fetch('http://localhost:3004/goods?_limit=20&_page=1');
  return response;
};
