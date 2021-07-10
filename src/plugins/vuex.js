import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        width: 0,
        height: 0
    },
    mutations: {
        SET_WIDTH (state, width) {
            state.width = width
        },
        SET_HEIGHT (state, height) {
            state.height = height
        }
    }
})
