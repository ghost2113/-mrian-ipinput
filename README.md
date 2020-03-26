# ipinput

## 项目描述
    一个基于vue的ip组件
## install
    npm install @mrian/ipinput
    or
    yarn add @mrian/ipinput
## usage
```
    import Vue from 'vue'
    import App from './App.vue'
    import mrian from '@mrian/ipinput'
    import '@mrian/ipinput/lib/mrian.css'
    Vue.config.productionTip = false
    Vue.use(mrian)
    new Vue({
    render: h => h(App),
    }).$mount('#app')
```

```
    <template>
        <ipinput></ipinput>
    </template>
```
## Project setup

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
