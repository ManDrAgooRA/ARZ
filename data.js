const faker = require('faker');

const mathRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = () => {
  const data = { goods: [] };
  for (let i = 0; i < 1000; i++) {
    data.goods.push({
      id: i,
      title: faker.commerce.productName(),
      image: faker.random.image(),
      category: [{ id: `${i}`, name: `category${mathRandom(1, 20)}` }],
      price: faker.commerce.price(),
      count: mathRandom(1, 100),
      raiting: mathRandom(0, 100),
      ifFavorite: false,
      specification: [{ title: 'phone', brend: 'samsung' }],
      comments: [
        {
          author: 'Ivan',
          lastName: 'Ivanov',
          text: 'good phone',
        },
        { author: 'Petr', lastName: 'Petrov', text: 'nice phone' },
      ],
      description: faker.commerce.productDescription(),
      isSale: false,
      salePrice: mathRandom(1, 10000),
    });
  }
  return data;
};
