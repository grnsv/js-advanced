const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    error.url = url;
                    this.$refs.errors.addError(error);
                })
        },
    },
    mounted() {
        console.log(this);
    }
});

