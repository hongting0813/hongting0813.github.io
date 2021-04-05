<template>
  <v-app class="my-container">
    <v-app-bar
      app
      shrink-on-scroll
      color="rgb(0,0,0,0.1)"
      :collapse-on-scroll="true"
      height="140"
      min-width="240"
      min-height="108"
    >
      <v-img
        class="ma-5 ml-3 mt-2"
        max-height="100"
        max-width="175"
        :src="logo"
      />
      <v-spacer />
      <!-- <v-row>
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
      </v-row> -->
    </v-app-bar>

    <v-main class="ma-8">
      <h1>
        億能手袋電壓製品廠
      </h1>

      <v-card
        width="600"
        height="600"
      >
        <v-container fluid>
          <v-row>
            <v-col
              class="pa-1 d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="gallery[0]['src']"
                  :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-card>
            </v-col>
            <v-col
              class="pa-1 d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="gallery[1]['src']"
                  :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-card>
            </v-col>
            <v-col
              class="pa-1 d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="gallery[2]['src']"
                  :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-card>
            </v-col>
            <v-col
              class="pa-1 d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="gallery[6]['src']"
                  :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-card>
            </v-col>
            <v-col
              class="pa-1 d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="gallery[7]['src']"
                  :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-card>
            </v-col>
            <v-col
              class="pa-1 d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="gallery[8]['src']"
                  :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-card>
            </v-col>
            <v-col
              class="pa-1 d-flex child-flex"
              cols="8"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="gallery[3]['src']"
                  :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"

                  class="grey lighten-2"
                />
              </v-card>
            </v-col>
            <v-col
              class="pa-1 d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="gallery[5]['src']"
                  :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <!-- <v-img src="http://up.deskcity.org/pic/0a/eb/d9/0aebd9555874e8722f4be5e515bfdf3a.jpg" /> -->
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import logo from './src/assets/img/logo-word.png'
// import bear001 from './src/assets/img/bear001.jpg'
// import bear002 from './src/assets/img/bear002.jpg'
// import bear003 from './src/assets/img/bear003.jpg'
// import bear004 from './src/assets/img/bear004.jpg'
// import bear005 from './src/assets/img/bear005.jpg'

import mmexport001 from './src/assets/img/mmexport1612454841217.jpg'
import mmexport002 from './src/assets/img/mmexport1612454842972.jpg'
import mmexport003 from './src/assets/img/mmexport1612454844586.jpg'
import mmexport004 from './src/assets/img/mmexport1612454847071.jpg'
import mmexport005 from './src/assets/img/mmexport1612454850384.jpg'
import mmexport006 from './src/assets/img/mmexport1612454848532.jpg'
import mmexport007 from './src/assets/img/mmexport1612454852058(1).jpg'
import mmexport008 from './src/assets/img/mmexport1612454853643.jpg'
import mmexport009 from './src/assets/img/mmexport1612454852058.jpg'

export default Vue.extend({
    data () {
        return {
            logo: logo,
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
                { src: mmexport008 },
                { src: mmexport009 }
            ]
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
