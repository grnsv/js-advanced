const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        imgCatalog: 'https://placehold.it/200x150',
        allProducts: [],
        products: [],
        searchLine: '',
        isVisibleCart: false,
        cartUrl: '/getBasket.json',
        imgCart: 'https://placehold.it/50x100',
        cart: [],
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product)
        },
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.products = this.allProducts.filter(product => regexp.test(product.product_name));
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.allProducts.push(el);
                }
                this.products = this.allProducts;
            })
            .catch(error => {
                console.log(error);
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cart.push(el);
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('beforeDestroy');
    }
});
