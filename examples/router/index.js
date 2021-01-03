import Vue from 'vue';
import Router from 'vue-router';
import navConfig from '../nav.config.json';

Vue.use(Router);

let routes = [];

Object.keys(navConfig).forEach(key => {
  routes = routes.concat(navConfig[key]);
});

const addComponent = (router) => {
  router.forEach(item => {
    if (item.items) {
      addComponent(item.items);
      routes = routes.concat(item.items);
    } else {
      if (item.type === 'pages') {
        item.component = r => require.ensure([], () =>
          r(require(`../pages/${item.name}.vue`)))
        return;
      }
      item.component = r => require.ensure([], () =>
        r(require(`../docs/${item.name}.md`)))
    }
  })
}

addComponent(routes);
export default new Router({
  routes
});