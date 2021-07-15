import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './vuex'
// i18n
import tw from '../i18n/tw.json'
import en from '../i18n/en.json'
import jp from '../i18n/jp.json'

Vue.use(VueI18n)

// 預設使用的語系
const locale = store.state.lang // 從 state 獲取預設語言設定。
store.commit('setLang', locale)

const i18n = new VueI18n({
    locale: locale,
    messages: {
        tw: tw,
        en: en,
        jp: jp
    }
})

export default i18n
