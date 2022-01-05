const faker = require('faker');

const mathRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = () => {
  const data = {
    goods: [],
    users: [],
  };
  for (let i = 0; i < 500; i++) {
    data.goods.push({
      id: i,
      title: faker.commerce.productName(),
      image: faker.random.image(),
      categories: `${faker.random.word()}`,
      price: +faker.commerce.price(),
      raiting: +mathRandom(0, 100),
      countries: `${faker.address.country()}`,
      ifFavorite: false,
      description: faker.commerce.productDescription(),
      isSale: false,
      salePrice: mathRandom(1, 10000),
    });
  }
  return data;
};
