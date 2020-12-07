import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import VueTailwind from 'vue-tailwind'


//Tailwind Vue Settings
const settings = {
}

Vue.use(VueTailwind, settings)

Vue.use(moment)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
