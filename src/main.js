// 引入vue
import Vue from 'vue'
// 引入app
import App from './app.vue'
// 关闭提示信息
Vue.config.productionTip = false
// 生命真个程序的类型(应用类型)
App.mpType = 'app'
// 实例化对象
const app = new Vue(App)
// 挂载生效
app.$mount()
