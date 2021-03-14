const fs = require('fs');

const file = './server/db/stats.json';

const write = (action, cart, req) => {
  let msg = {date: new Date()};
  let prod;

  switch (action) {
    case 'add':
      prod = req.body;
      msg.action = 'Добавлено';
      break;
    case 'change':
      prod = JSON.parse(cart).contents.find(el => el.id_product === +req.params.id);
      msg.action = 'Добавлено';
      break;
    case 'del':
      prod = JSON.parse(cart).contents.find(el => el.id_product === +req.params.id);
      msg.action = 'Удалено';
      break;
  }

  msg.product = prod.product_name;

  fs.appendFile(file, JSON.stringify(msg), (err) => {
    if (err) console.log(err);
  });
};

module.exports = {
  write,
};
