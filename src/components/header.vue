<template>
  <div>
    <v-app-bar
      app
      color="rgb(0,0,0)"
      :height="isVisible?110:85"
      dark
      width="100%"
    >
      <router-link to="/">
        <v-img
          class="ma-5 ml-3 mt-6 "
          :height="isVisible?85:60"
          :width="isVisible?150:120"
          :src="logo"
        />
      </router-link>

      <v-spacer />
      <div
        v-for="(link,index) in menu"
        v-show="width>1060?true:false"
        :key="index"
      >
        <router-link :to="link.link">
          <button
            class="btn draw-border"
            color="white"
            text
            rounded
            :to="link.link"
          >
            {{ link.title }}
          </button>
        </router-link>
      </div>
      <v-spacer />
      <langnav v-if="width>1060" />
      <langnavMobile v-else />
      <v-app-bar-nav-icon
        v-show="width>1060?false:true"
        color="#ffe593aa"
        x-large
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      app
      dark
      color="rgb(0,0,0,0.8)"
      overlay-opacity="0.8"
    >
      <v-list
        nav
        flat
      >
        <v-list-item-group
          v-model="group"
          active-class="gold-text"
        >
          <v-list-item
            v-for="(link, index) in menu"
            :key="index"
            :to="link.link"
          >
            <v-list-item-title>
              {{ link.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import logo from '../assets/img/logo-word.png'
import langnav from '../components/header/langnav.vue'
import langnavMobile from '../components/header/langnavMobile.vue'
export default {
    components: {
        langnav, langnavMobile
    },
    data () {
        return {
            logo: logo,
            drawer: false,
            group: null

        }
    },
    computed: {
        isVisible () {
            return !this.$vuetify.breakpoint.mobile
        },
        width () {
            return this.$store.state.width
        },
        menu () {
            return [
                { title: this.$t('aboutUs'), link: '/' },
                { title: this.$t('product_photo'), link: '/product' },
                { title: this.$t('company_member'), link: '/member' },
                { title: this.$t('contactUs'), link: '/contact' }
            ]
        }
    },
    watch: {
        group () {
            this.drawer = false
        }
    },
    mounted () {

    },
    methods: {
    }
}
</script>

<style scoped>
.gold-text{
  color:#ffe593aa
}
</style>
