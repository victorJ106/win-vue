<template>
  <div class="pg-index">
    <div class="head">
      <img src="../assets/logo.png">
      <p>一款轻量级、模块化的前端 UI 组件库（一款属于我们自己的组件库）</p>
    </div>
    <div class="start">
      <router-link :to="{name: 'guid'}">开始使用</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" type="text/less">
  .pg-index {
    text-align: center;
    .head {
      margin-top: 100px;
      color: #8994C6;
      font-size: 22px;
    }
    .start {
      a {
        color: #fff;
        background-image: linear-gradient(90deg, #00AEFF 0%, #3369E7 100%);
        box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);
        display: inline-block;
        width: 190px;
        height: 50px;
        font-size: 18px;
        line-height: 50px;
        border-radius: 25px;
        text-decoration: none;
        cursor: pointer;
        margin-top: 40px;
      }
    }
  }
</style>
