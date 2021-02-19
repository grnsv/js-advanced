'use strict';

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = ({title = 'Item', price = 100}) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = list => {
  let goodsList = list.reduce((result, item) => result + renderGoodsItem(item), "");
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);