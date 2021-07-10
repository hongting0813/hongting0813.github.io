<template>
  <div>
    <v-carousel
      cycle
      class="ma-0 pa-0"
      :height="height"
      hide-delimiter-background
      :hide-delimiters="gallery.length>2?false:true"
      show-arrows-on-hover
      :show-arrows="gallery.length>2?true:false"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item, i) in gallery"
        :key="i"
      >
        <div
          class="pic"
          :style="{backgroundImage:'url('+item.src+')'}"
        />
      </v-carousel-item>
    </v-carousel>
    <v-sheet
      :height="height"
      color="rgb(0,0,0,0)"
      class="pa-5 ma-5"
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-col md="5">
          <div
            class="bigTitle whiteText wow animate__fadeInLeft"
            :class="[$vuetify.breakpoint.lgAndUp? 'textLeft' : 'textCenter']"
          >
            <div>
              億能位於
              <span style="color:#ffe593aa;font-size:6vmin">深圳</span>
            </div>
            <div>已有<span style="color:#ffe593aa;font-size:6vmin">20年</span>歷史</div>
            <div>是一家手袋製造工廠</div>
          </div>
        </v-col>
        <v-col
          md="5"
          class="wow animate__slideInUp"
          data-wow-delay="0.2s"
        >
          <v-img
            class="picBorder animate__backInDown"
            :src="enviroPng"
            :max-height="height*0.6"
          />
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet
      :height="height"
      color="rgb(0,0,0,0)"
      class="pa-5 ma-5"
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-col
          md="5"
          order-md="2"
        >
          <v-row
            align="center"
            justify="center"
          >
            <div
              class="bigTitle whiteText wow animate__fadeInRight "
              :class="[$vuetify.breakpoint.lgAndUp ? 'textLeft' : 'textCenter']"
            >
              <div>
                ⻑期擔任
              </div>
              <div>
                <span style="color:#ffe593aa;font-size:6vmin">歐美</span>
                及
                <span style="color:#ffe593aa;font-size:6vmin">日本</span>
              </div>
              <div>各大品牌的<span style="color:#ffe593aa;font-size:6vmin">OEM</span></div>
            </div>
          </v-row>
        </v-col>
        <v-col
          md="5"
          order-md="1"
          class="wow animate__slideInUp"
          data-wow-delay="0.2s"
        >
          <center>
            <v-img
              class="picBorder"
              :src="worldmap"
              :style="{backgroundImage:'url('+worldmap+')'}"
              :max-height="height*0.6"
            />
          </center>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import pic1 from '../../assets/img/intro/banner.jpg'
import locationPng from '../../assets/img/intro/location.png'
import enviroPng from '../../assets/img/intro/enviro.jpg'
import worldmap from '../../assets/img/intro/worldmap.jpg'
// import pic2 from '../../assets/img/intro/intro2.png'
export default {
    data () {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4'
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth'
            ],
            gallery: [
                { src: pic1 }
                // { src: pic2 }
            ],
            locationPng: locationPng,
            enviroPng: enviroPng,
            worldmap: worldmap
        }
    },
    computed: {
        height () {
            return this.$store.state.height - (this.$vuetify.breakpoint.mobile ? 100 : 75)
        }
    }
}
</script>

<style scoped>
.pic{
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  /* transition: transform 1s ease; */
}
/* .pic:hover {
transform: scale(1.4);
-ms-transform: scale(1.4);
-webkit-transform: scale(1.4);} */
.picBorder{
  border-radius: 6px;
  border-style: solid;
  border-width: 1vh;
  border-color:#ffe593aa ;
}
.textRight{
  text-align: right;
}
.textLeft{
  text-align: left;
}
</style>
