Vue.component('errors', {
  data(){
      return {
          errors: []
      }
  },
  methods: {
    addError(error){
        this.errors.push(error);
    }
  },
  computed: {
    isVisible(){
        return this.errors.length !== 0
    }
  },
  template: `
  <div class="error-block" v-if="isVisible">
      <error v-for="error of errors" :error="error" :key="error.message"></error>
  </div>
  `
});

Vue.component('error', {
    props: ['error'],
    methods: {
      removeError(error){
        this.$parent.errors = this.$parent.errors.filter(item => item != error);
      }
    },
    template: `
    <p class="error-msg">
        <button class="close-btn" @click="removeError(error)">&times;</button>
        {{ error.message + " " + error.url }}
    </p>
    `
});