// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import demoBlock from './components/demo-block';
import WnUI from '../packages/index';
import '../packages/theme-default/src/index.less'

Vue.component('demo-block', demoBlock);
Vue.use(WnUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
