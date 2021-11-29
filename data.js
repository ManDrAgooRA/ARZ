const mathRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = () => {
  const data = { goods: [] };
  for (let i = 0; i < 1000; i++) {
    data.goods.push({
      id: i,
      title: `goods_title ${i}`,
      images: ['iamge/1', 'iamge/2', 'iamge/3', 'iamge/4'],
      category: [{ id: `${i}`, name: `category${mathRandom(1, 20)}` }],
      price: mathRandom(1, 100000),
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
      description: [
        { title: 'title', image: 'image/path/1' },
        { title: 'title2', image: 'image/path/2' },
      ],
      isSale: false,
      salePrice: mathRandom(1, 10000),
    });
  }
  return data;
};
