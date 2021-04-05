<template>
  <v-app class="my-container">
    <v-app-bar
      app
      shrink-on-scroll
      color="rgb(0,0,0,0.1)"
      :collapse-on-scroll="true"
      height="140"
      min-width="240"
      min-height="120"
    >
      <v-img
        class="ma-5 ml-3 mt-2"
        max-height="100"
        max-width="175"
        :src="logo"
      />
      <v-spacer />
    </v-app-bar>
    <div class="navbtn">
      <button
        v-for="link in links"
        :key="link"
        class="btn draw-border"
        color="white"
        text
        rounded
      >
        {{ link }}
      </button>
    </div>
    <v-main class="ma-8">
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
      <h1>
        億能手袋電壓製品廠
      </h1>
    </v-main>
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
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
            drawer: false,
            links: [
                '關於我們',
                '合作品牌',
                '公司成員',
                '聯絡我們'
            ]
        }
    }
})
</script>

<style scoped>
/*background*/
.my-container {
  max-width: none;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;
}
/*navbtn*/
.navbtn{
  margin: 40px 0% 0% 30%;
  position: fixed;
  z-index: 10;

}
@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
.draw-border {
  box-shadow: inset 0 0 0 3px #ffe593aa;
  color: #ffe593aa;
  transition: color 0.25s 0.0833333333s;
  position: relative;
}
.draw-border::before, .draw-border::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
  border-radius: 30px 10px;
}
.draw-border::before {
  border-bottom-width: 3px;
  border-left-width: 3px;
}
.draw-border::after {
  border-top-width: 3px;
  border-right-width: 3px;
}
.draw-border:hover {
  color: #c0c0c0;
}
.draw-border:hover::before, .draw-border:hover::after {
  border-color: #c0c0c0;
  transition: border-color 0s, width 0.25s, height 0.25s,border-radius 0.25s;
  width: 100%;
  height: 100%;
}
.draw-border:hover::before {
  transition-delay: 0s, 0s, 0.25s;
}
.draw-border:hover::after {
  transition-delay: 0s, 0.25s, 0s;
}

.btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0.5;
  font: 700 1.2rem 'cwTeXYen', sans-serif;
  padding: 0.5em 1em;
  letter-spacing: 0.05rem;
  margin: 0.2em 0.8em;
  border-radius: 30px 10px;
}
.btn:focus {
  outline: 0px dotted #c0c0c0;
}

</style>
