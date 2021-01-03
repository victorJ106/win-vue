import Button from './button';

const components = [
  Button
];

function install(Vue) {
  components.forEach(comp => {
    Vue.component(comp.name, comp);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
}