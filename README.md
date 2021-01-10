# 介绍
这个 `UI`库主要是参考 [element](https://github.com/ElemeFE/element) 源码，学习如何封装一个自己的组件库。

## Install
```shell
npm install bkrwin-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import BkrWin from 'bkrwin-ui'

Vue.use(BkrWin)

// or
import {
  Button
  // ...
} from 'bkrwin-ui'

Vue.component(Button.name, Button)
```
