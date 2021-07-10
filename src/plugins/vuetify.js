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
    },
    breakpoint: {
        thresholds: {
            xs: 340,
            sm: 768,
            md: 960,
            lg: 1280
        },
        mobileBreakpoint: 'sm'
    }
}

export default new Vuetify(opts)
