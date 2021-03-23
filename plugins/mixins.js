import Vue from 'vue'
Vue.mixin({
  methods: {
    navigate(route) {
      const self = this
      setTimeout(function () {
        // give time for animation
        self.$router.push({ path: route })
      }, 300)
    },
    isValid(text, pattern) {
      const regex = new RegExp(pattern)
      return regex.test(text)
    },
  },
})
