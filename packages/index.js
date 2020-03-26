import IPInput from './IPInput'

const components = [
    IPInput
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function(Vue) {
    //是否已经安装
    if (install.installed) return
    components.map(component => {// 遍历注册全局组件
        Vue.component(component.name, component)
    })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install, // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    // 组件列表
    IPInput
}