<template>
  <div class="side-nav">
    <div v-for="title in (Object.keys(data))" class="group-container" :key="title">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="nav in data[title].filter(item => !!item.desc)"
        :key="nav.desc">
        <router-link :class="$route.name===nav.name ? 'active' : ''"
          v-if="nav.name" :to="{name: nav.name}">{{nav.desc}}</router-link>
        <p v-else class="side-nav-group">{{nav.desc}}</p>
        <div v-for="(item, index) in nav.items" :key="index">
          <router-link :to="{name: item.name}" :class="$route.name===item.name ?
            'active' : ''" class="slid-nav-component">{{item.desc}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navConf from '../nav.config.json';

export default {
  data() {
    return {
      data: navConf
    }
  }
}
</script>

<style lang="less" type="text/less">
  .side-nav {
    display: inline-block;
    padding: 0;
    background-color: #fff;
    z-index: 99;
    .group-container{
      margin-bottom: 20px;
    }
    .side-nav-title {
      padding: 0 24px 8px;
      color: #2C405A;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
    }
    .side-nav-items {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8;
      a {
        display: block;
        position: relative;
        padding: 8px 24px;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
        color: #333333;
      }
      .side-nav-group {
        display: block;
        position: relative;
        padding: 8px 24px;
        color: #999999;
        font-weight: bold;
        font-size: 12px;
      }
      .slid-nav-component {
        display: block;
        position: relative;
        padding: 8px 24px;
        font-size: 14px;
      }
      .active {
        color: #3FAAF5;
      }
    }
  }
</style>
