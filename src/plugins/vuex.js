import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMobile: null,
        width: 0,
        height: 0
    },
    mutations: {
        // 判斷是不是手機端
        SET_MOBLIE (state, isMobile) {
            state.isMobile = isMobile
        },
        SET_WIDTH (state, width) {
            state.width = width
        }
    }
})
