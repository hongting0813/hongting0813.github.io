<template>
  <v-app class="bg">
    <headerpage />
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container
        fluid
        class="pa-0"
      >
        <!-- 如果使用 vue-router -->
        <router-view />
      </v-container>
    </v-main>
    <!-- <footerpage /> -->
  </v-app>
</template>

<script>
import Vue from 'vue'

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
            drawer: false
        }
    },
    computed: {
        isVisible () {
            return !this.$vuetify.breakpoint.mobile
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
            offset: 50,
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
            this.$store.commit('SET_HEIGHT', document.documentElement.clientHeight)
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
