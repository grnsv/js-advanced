//very very good

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// Перевести на Promise НЕ ИСПОЛЬЗОВАТЬ fetch
let getRequest = url => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject(new Error(`${xhr.response}\n${xhr.responseURL}`));
        } else {
          resolve(xhr.responseText);
        }
      }
    }
    xhr.send();
  })
};
///////////////////////////////////////

class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];

    this.#fetchGoods()
      .then(data => {
        this.#goods = [...data];
        this.#render();
      })
      .catch(console.log);
    // this.#getProducts()
    //     .then((data) => {
    //       this.#goods = [...data];
    //       this.#render();
    //     });
  }

  goodsTotalPrice() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }

  #fetchGoods() {
    return getRequest(`${API}/catalogData.json`)
      .then(data => JSON.parse(data));
  }
  // #getProducts() {
  //   return fetch(`${API}/catalogData.json`)
  //       .then((response) => response.json())
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // }

  #render() {
    const block = document.querySelector(this.container);

    this.#goods.forEach((product) => {
      const productObject = new ProductItem(product);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
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

class Cart {
  #goods;

  constructor() {
    this.#goods = [];

    this.#fetchGoods()
      .then(data => {
        this.#goods = [...data];
      })
      .catch(console.log);
  }

  #fetchGoods() {
    return getRequest(`${API}/getBasket.json`)
      .then(data => JSON.parse(data).contents);
  }

  addGoods(product) {
    this.#goods.push(product);
  }

  removeGoods(product) {
    this.#goods = this.#goods.filter(item => item.id_product != product.id);
  }

  clearGoods() {
    this.#goods = [];
  }

  checkGoods() {
    return this.#goods;
  };
}

class CartItem extends ProductItem {
  constructor(product, img) {
    super(product, img)
    this.quantity = quantity;
  }

  // removeItem() {}

  // changeQty(qty) {}
}

const cart = new Cart();