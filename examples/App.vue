<template>
  <div id="app">
    <div class="container clearfix" v-if="!isIndex">
      <side-nav class="nav f-l"></side-nav>
      <router-view class="view f-r"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
  </div>
</template>

<script>
import SideNav from './components/side-nav';

export default {
  name: 'App',
  components: {
    SideNav,
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

<style lang="less">
  @import "./assets/css/index.less";

  .container {
    width: 90%;
    margin: 20px auto;
    min-height: 600px;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      width: 210px;
      margin-top: 20px;
    }
    .view {
      padding: 20px;
      width: calc(90% - 210px);
    }
  }
</style>

