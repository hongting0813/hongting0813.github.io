<template>
  <v-app class="my-container">
    <v-app-bar
      app
      shrink-on-scroll
      color="rgb(0,0,0,0.1)"
      :collapse-on-scroll="true"
      height="140"
      min-width="240"
    >
      <v-img
        class="ma-5 ml-3 mt-2"
        max-height="100"
        max-width="175"
        :src="logo"
      />
      <v-spacer />
      <v-row>
        <v-col>
          <v-btn class="mr-2">
            Introduce
          </v-btn>
          <v-btn class="mr-2">
            mdi-filter
          </v-btn>
          <v-btn class="mr-2">
            mdi-dots-vertical
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main class="ma-8">
      <h1>
        億能手袋電壓製品廠
      </h1>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import logo from './src/assets/img/logo-word.png'

export default Vue.extend({
    data () {
        return {
            logo: logo,
            bundler: 'Parcel',
            drawer: false
        }
    }
})
</script>

<style scoped>
.my-container {
  max-width: none;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;
}

</style>
