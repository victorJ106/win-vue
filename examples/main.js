// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import demoBlock from './components/demo-block';
import WnUI from '../lib/index';
import '../packages/theme-default/src/index.less';
/* eslint-disable */
import hljs from 'highlight.js';

Vue.component('demo-block', demoBlock);
Vue.use(WnUI);

Vue.config.productionTip = false;

router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
