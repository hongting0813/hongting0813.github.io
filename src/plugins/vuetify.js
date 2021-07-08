import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#323232',
                secondary: 'ffe593',
                accent: '#8c9eff',
                error: '#b71c1c'
            },
            dark: {
                primary: '#ffd700'
            }
        }
    }
}

export default new Vuetify(opts)
