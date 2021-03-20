import Vue from 'vue'
// https://github.com/hilongjw/vue-lazyload
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  // set observer to true
  observer: true,

  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1,
  },
})
