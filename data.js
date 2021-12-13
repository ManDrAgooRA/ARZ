const faker = require('faker');

const mathRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = () => {
  const data = { goods: [] };
  for (let i = 0; i < 500; i++) {
    data.goods.push({
      id: i,
      title: faker.commerce.productName(),
      image: faker.random.image(),
      categories: `${faker.random.word()}`,
      price: +faker.commerce.price(),
      count: mathRandom(1, 100),
      raiting: mathRandom(0, 100),
      countries: `${faker.address.country()}`,
      ifFavorite: false,
      specification: [{ title: 'phone', brend: 'samsung' }],
      description: faker.commerce.productDescription(),
      isSale: false,
      salePrice: mathRandom(1, 10000),
    });
  }
  return data;
};
