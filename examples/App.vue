<template>
  <div id="app">
    <div class="container" v-if="!isIndex">
      <!-- <sideNav class="nav"></sideNav> -->
      <router-view class="view"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      isIndex: true,
    };
  },
  watch: {
    $route() {
      this.isIndex = this.$route.name === 'index';
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

