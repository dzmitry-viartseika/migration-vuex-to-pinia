// import Vue from 'vue';
// import Vuex from 'vuex';

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';

async function fetchUserDataJSON() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const userData = await response.json();
  return userData;
}

// import * as types from '@/store/mutationTypes';

// eslint-disable-next-line import/prefer-default-export
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 555,
    userData: null,
    websiteTemplateList: [
      {
        id: 1,
        name: 'template #1',
      },
      {
        id: 2,
        name: 'template #1',
      },
      {
        id: 3,
        name: 'template #1',
      },
      {
        id: 4,
        name: 'template #1',
      },
      {
        id: 5,
        name: 'template #1',
      },
      {
        id: 6,
        name: 'template #1',
      },
      {
        id: 7,
        name: 'template #1',
      },
      {
        id: 8,
        name: 'template #1',
      },
      {
        id: 9,
        name: 'template #1',
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.count,
    websiteTemplateList: (state) => state.websiteTemplateList,
  },
  actions: {
    increment() {
      this.count += 1;
    },
    decrease() {
      this.count -= 1;
    },
    reset() {
      this.count = 0;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
    },
    async getUserData() {
      await fetchUserDataJSON().then((userData) => {
        this.userData = userData;
      });
    },
  },
});
// import {SET_COUNTER_VALUE, SET_WEBSITE_TEMPLATE_LIST} from "@/store/mutationTypes";
//
// Vue.use(Vuex);
//
// export default new Vuex.Store({
//   state: {
//     websiteTemplateList: [
//       {
//         id: 1,
//         name: 'template #1',
//       },
//       {
//         id: 2,
//         name: 'template #1',
//       },
//       {
//         id: 3,
//         name: 'template #1',
//       },
//       {
//         id: 4,
//         name: 'template #1',
//       },
//       {
//         id: 5,
//         name: 'template #1',
//       },
//       {
//         id: 6,
//         name: 'template #1',
//       },
//       {
//         id: 7,
//         name: 'template #1',
//       },
//       {
//         id: 8,
//         name: 'template #1',
//       },
//       {
//         id: 9,
//         name: 'template #1',
//       },
//     ],
//     counter: 0,
//   },
//   getters: {
//     websiteTemplateList: (state) => state.websiteTemplateList,
//     counter: (state) => state.counter,
//   },
//   mutations: {
//     [types.SET_WEBSITE_TEMPLATE_LIST](state, { data }) {
//       state.websiteTemplateList = data;
//     },
//     [types.SET_COUNTER_VALUE](state, { data }) {
//       state.counter = data;
//     },
//   },
//   actions: {
//     setWebsiteTemplateList({ commit }, data) {
//       commit(types.SET_WEBSITE_TEMPLATE_LIST, { data });
//     },
//     setCounterValue({ commit }, data) {
//       commit(types.SET_COUNTER_VALUE, { data });
//     },
//   },
//   modules: {
//   },
// });
