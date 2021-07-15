import './index.css'
import Vue from 'vue'
import vuetify from './src/plugins/vuetify'
import router from './src/plugins/vuerouter'
import store from './src/plugins/vuex'
import i18n from './src/plugins/i18n'
import App from './App.vue'
// wow
import animated from 'animate.css'
import 'wowjs/css/libs/animate.css'

Vue.use(animated)

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: createElement => createElement(App)
}).$mount('#app')
