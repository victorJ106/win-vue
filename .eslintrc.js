// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  globals: {
    ga: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    'eol-last': 0,           // 该规则在非空文件的末尾至少执行一个换行符
    'comma-dangle': 0,        //  对象最后一行尾随分号
    'semi':  0,               // 末尾加封号
    'arrow-parens': 0,        // 箭头参数必须有括号
    'no-param-reassign': 0,   // 函数参数不能重新赋值
    'global-require': 0,      // 必须在文件头部require
    'import/no-dynamic-require': 0,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
