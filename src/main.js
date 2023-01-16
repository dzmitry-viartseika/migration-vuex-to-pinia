// import Vue from 'vue';
// // eslint-disable-next-line import/no-extraneous-dependencies

//
// Vue.config.productionTip = false;
//
// // Vue.use(PiniaVuePlugin);
// // const pinia = createPinia();
//
// // eslint-disable-next-line no-new
// new Vue({
//   el: '#app',
//   // pinia,
// });

import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import App from './App.vue';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  // store,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
