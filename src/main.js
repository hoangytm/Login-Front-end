import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import router from './router'
import interceptor from'./store/interceptor'
Vue.config.productionTip = false
// make a intercepter cho request
axios.defaults.baseURL = 'http://localhost:8088/';
interceptor();
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
