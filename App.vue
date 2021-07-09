<template>
  <v-app class="bg">
    <headerpage />
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <!-- 如果使用 vue-router -->
        <router-view />
      </v-container>
    </v-main>
    <footerpage />
  </v-app>
</template>

<script>
import Vue from 'vue'

import mmexport001 from './src/assets/img/mmexport1612454841217.jpg'
import mmexport002 from './src/assets/img/mmexport1612454842972.jpg'
import mmexport003 from './src/assets/img/mmexport1612454844586.jpg'
import mmexport004 from './src/assets/img/mmexport1612454847071.jpg'
import mmexport005 from './src/assets/img/mmexport1612454850384.jpg'
import mmexport006 from './src/assets/img/mmexport1612454848532.jpg'
import mmexport007 from './src/assets/img/mmexport1612454853643.jpg'
import mmexport008 from './src/assets/img/mmexport1612454852058.jpg'
import { WOW } from 'wowjs'
import headerpage from './src/components/header.vue'
import footerpage from './src/components/footer.vue'
export default Vue.extend({
    components: {
        footerpage, headerpage
    },
    data () {
        return {
            bundler: 'Parcel',
            drawer: false,
            gallery: [
                { src: mmexport001 },
                { src: mmexport002 },
                { src: mmexport003 },
                { src: mmexport004 },
                { src: mmexport005 },
                { src: mmexport006 },
                { src: mmexport007 },
                { src: mmexport008 }
            ]
        }
    },
    computed: {
        isVisible () {
            return !this.$store.state.isMobile
        },
        username () {
            // We will see what `params` is shortly
            return this.$route.params.username
        }
    },
    mounted () {
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 40,
            mobile: true,
            live: true
        })
        wow.init()
        this.getScreen()
        this.setMobile()
    },
    methods: {
        getScreen () {
            const clientWidth = document.documentElement.clientWidth || document.body.clientHeight
            this.$store.commit('SET_WIDTH', clientWidth)
            if (clientWidth < 768) { // 當屏幕小於768時，設置Vuex裏的數據爲true
                this.$store.commit('SET_MOBLIE', true)
            } else { // 反之，設置Vuex裏的數據爲false
                this.$store.commit('SET_MOBLIE', false)
            }
        },
        setMobile () {
            // 監聽屏幕
            addEventListener('resize', () => {
                this.getScreen()
            })
        },
        goBack () {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }

})
</script>

<style scoped>
/*background*/
.bg {
    padding: 0;
    margin:0;
    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
    /* background-blend-mode: multiply; */
  }
</style>
