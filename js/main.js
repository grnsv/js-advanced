class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];

    this.#fetchGoods();
    this.#render();
  }

  #fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    this.#goods.forEach((product) => {
      const productObject = new ProductItem(product);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
  }

  calcSum() {
    return this.#allProducts.reduce((sum, {price}) => sum + price, 0);
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const productList = new ProductList();
console.log(productList.calcSum());

class Cart {
  #goods;
  #fetchGoods() {}
  #render() {}
  calcSum() {}
  clearGoods() {}
  addGoods(item, qty) {}
}

class CartItem {
  render() {}
  removeItem() {}
  changeQty(qty) {}
}


class Hamburger {

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = new Set();
  }

  addTopping(topping) {
    this.toppings.add(topping);
  }
  
  removeTopping(topping) {
    this.toppings.delete(topping);
  }
  
  getToppings() {
    return this.toppings;
  }
  
  getSize() {
    return this.size;
  }

  getStuffing() {
    return this.stuffing;
  }

  calculatePrice() {
    let price = 0;
    price += this.sizeList[this.size].price;
    price += this.stuffingList[this.stuffing].price;
    this.toppings.forEach(topping => {
      price += this.toppingList[topping].price;
    });
    return price;
  }
  
  calculateCalories() {
    let calories = 0;
    calories += this.sizeList[this.size].calories;
    calories += this.stuffingList[this.stuffing].calories;
    this.toppings.forEach(topping => {
      calories += this.toppingList[topping].calories;
    });
    return calories;
  }
}

Hamburger.prototype.sizeList = {
  small: {
    price: 50,
    calories: 20
  },
  big: {
    price: 100,
    calories: 40
  }
};

Hamburger.prototype.stuffingList = {
  cheese: {
    price: 10,
    calories: 20
  },
  salad: {
    price: 20,
    calories: 5
  },
  potato: {
    price: 20,
    calories: 5
  },
};

Hamburger.prototype.toppingList = {
  spice: {
    price: 15,
    calories: 0
  },
  mayo: {
    price: 20,
    calories: 5
  }
};