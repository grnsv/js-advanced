Vue.component('search', {
    inheritAttrs: false,
    props: ['value'],
    computed: {
        inputListeners: function () {
            var vm = this
            return Object.assign({},
                this.$listeners,
                {
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    },
    template: `
              <form action="#" class="search-form" v-bind="$attrs"
              v-bind:value="value"
              v-on="inputListeners">
                  <input type="text" class="search-field">
                  <button class="btn-search" type="submit">
                      <i class="fas fa-search"></i>
                  </button>
              </form>
    `
});