import Vue from 'vue'
import vuetify from './src/plugins/vuetify'
import App from './App.vue'

new Vue({
  vuetify,
  render: createElement => createElement(App)
}).$mount('#app')
