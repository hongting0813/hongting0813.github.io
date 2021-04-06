import './index.css'
import Vue from 'vue'
import vuetify from './src/plugins/vuetify'
import App from './App.vue'

import animated from 'animate.css'
import 'wowjs/css/libs/animate.css'
Vue.use(animated)

new Vue({
    vuetify,
    render: createElement => createElement(App)
}).$mount('#app')
