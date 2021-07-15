import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        width: 0,
        height: 0,
        lang: 'tw'
    },
    mutations: {
        SET_WIDTH (state, width) {
            state.width = width
        },
        SET_HEIGHT (state, height) {
            state.height = height
        },
        // 切換語系設定
        setLang (state, value) {
            state.lang = value
        }
    }
})
