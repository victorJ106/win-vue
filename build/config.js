const path  = require('path');
const Components = require('../components.json');

let externals = {};

Object.keys(Components).forEach(key => {
  externals[`bkrwin-ui/packages/${key}`] = `bkrwin-ui/lib/${key}`;
})

externals = [Object.assign({
  vue: 'vue'
}, externals)];

exports.externals = externals;

exports.alias = {
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'bkrwin-ui': path.resolve(__dirname, '../'),
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};