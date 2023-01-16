<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    testCount={{ testCount }}
<!--    list={{ list }}-->
<!--    <button @click="updateTemplateList">updateList</button>-->
<!--    <br>-->
<!--    counter={{ counterValue }}-->
    <div v-if="userDataValues">
      userDataValues={{ userDataValues }}
    </div>
    <button @click="incrementClickEvent">+</button>
    <button @click="decreaseClickEvent">-</button>
    <button @click="resetClickEvent">reset</button>
    <button @click="randomizeCounterClickEvent">randomizeCounter</button>
    <button @click="getUserDataRequest">USERDATA</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import { mapActions, mapGetters } from 'vuex';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '@/store/index';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  computed: {
    // ...mapGetters({ templateList: 'websiteTemplateList', counter: 'counter' }),
    ...mapState(useCounterStore, ['count', 'userData']),
    // list() {
    //   return this.templateList;
    // },
    counterValue() {
      return this.counter;
    },
    testCount() {
      return this.count;
    },
    userDataValues() {
      return this.userData;
    },
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrease', 'reset', 'randomizeCounter', 'getUserData']),
    incrementClickEvent() {
      this.increment();
    },
    decreaseClickEvent() {
      this.decrease();
    },
    resetClickEvent() {
      this.reset();
    },
    randomizeCounterClickEvent() {
      this.randomizeCounter();
    },
    async getUserDataRequest() {
      await this.getUserData();
    },
  },
  // methods: {
  //   ...mapActions({ setTemplateList: 'setWebsiteTemplateList', setCounterValue:
  //   'setCounterValue' }),
  //   updateTemplateList() {
  //     const result = [{
  //       id: 100,
  //       name: 'template #100',
  //     }];
  //     this.setTemplateList(result);
  //   },
  //   increase() {
  //     const result = this.counter + 1;
  //     this.setCounterValue(result);
  //   },
  //   decrease() {
  //     const result = this.counter - 1;
  //     this.setCounterValue(result);
  //   },
  //   reset() {
  //     const result = 0;
  //     this.setCounterValue(result);
  //   },
  // },
};
</script>
