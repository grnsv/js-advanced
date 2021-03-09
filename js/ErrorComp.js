Vue.component('error', {
  props: ['error'],
  template: `
            <div>{{ error.message + " " + error.url }}</div>
  `
});