<template>
  <div>
    <!-- banner -->
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
    <!-- page1 -->
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
              <span class="focusWord">深圳</span>
            </div>
            <div>已有<span class="focusWord">20年</span>歷史</div>
            <div>是一家手袋製造工廠</div>
          </div>
        </v-col>
        <v-col
          md="5"
          class="wow"
          :class="[$vuetify.breakpoint.lgAndUp ? 'animate__fadeInRight' : 'animate__fadeInUp']"
        >
          <v-img
            class="picBorder"
            :src="enviroPng"
            :max-height="height*0.6"
          />
        </v-col>
      </v-row>
    </v-sheet>
    <!-- page2 -->
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
                <span class="focusWord">歐美</span>
                及
                <span class="focusWord">日本</span>
              </div>
              <div>各大品牌的 <span class="focusWord">OEM</span></div>
            </div>
          </v-row>
        </v-col>
        <v-col
          md="5"
          order-md="1"
          class="wow"
          :class="[$vuetify.breakpoint.lgAndUp ? 'animate__fadeInLeft' : 'animate__fadeInUp']"
        >
          <center>
            <v-img
              class="picBorder"
              :src="worldmap"
              :style="{backgroundImage:'url('+worldmap+')'}"
              :max-height="height*0.6"
            >
              <span class="picWord textLeft">
                <div><span style="color:#ffe593aa; font-size:7vmin;">O</span>riginal</div>
                <div><span style="color:#ffe593aa; font-size:7vmin;">E</span>quipment</div>
                <div><span style="color:#ffe593aa; font-size:6vmin;">M</span>anufacturer</div>
              </span>
            </v-img>
          </center>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- page3 -->
    <v-sheet
      :height="height+($vuetify.breakpoint.mdAndUp?0:(height*0.35*2.5))"
      color="rgb(0,0,0,0)"
      class="pa-5 ma-5"
    >
      <v-row
        align="center"
        justify="center"
      >
        <div
          class="bigTitle whiteText wow animate__fadeInDownBig textCenter"
        >
          <div>
            擁有 <span class="focusWord">優良環境</span> 和 <span class="focusWord">資深員工</span>
          </div>
        </div>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          v-for="(item,i) in environment"
          :key="i"
          :cols="$vuetify.breakpoint.mdAndUp?5:12"
        >
          <v-row>
            <v-col>
              <v-img
                class="picBorder pic wow animate__fadeInUp "
                :height="$vuetify.breakpoint.mdAndDown?height*0.4:height*0.35"
                :style="{backgroundImage:'url('+item.src+')'}"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- page4 -->
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
              製造<span class="focusWord">優質</span>的產品
            </div>
            <div
              style="font-size:3vmin;"
              class="mt-5"
            >
              <span class="highlight">自行車防水袋、潛水用防水袋、運動防水背包等。</span>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="5"
          class="wow"
          :class="[$vuetify.breakpoint.lgAndUp ? 'animate__fadeInRight' : 'animate__fadeInUp']"
        >
          <center>
            <v-img
              :src="productPng"
              :max-width="$vuetify.breakpoint.mdAndDown?height*0.8:height*1"
            />
          </center>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- page5 -->
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
        <div
          class="bigText  textCenter focusWord wow animate__zoomIn"
          style="font-size:10vmin;"
        >
          Yineng<br>期待與您合作
        </div>
      </v-row>
    </v-sheet>
    <footerpage />
  </div>
</template>

<script>
import pic1 from '../../assets/img/intro/banner.jpg'// banner
import enviroPng from '../../assets/img/intro/enviro.jpg'// page1
import worldmap from '../../assets/img/intro/worldmap.jpg'// page2
import enviro1 from '../../assets/img/environment/1.jpg'// page3
import enviro2 from '../../assets/img/environment/2.jpg'// page3
import enviro3 from '../../assets/img/environment/3.jpg'// page3
import enviro4 from '../../assets/img/environment/4.jpg'// page3
import productPng from '../../assets/img/intro/product.png'// page4
import footerpage from '../footer.vue'

export default {
    components: {
        footerpage
    },
    data () {
        return {
            gallery: [
                { src: pic1 }
            ],
            enviroPng: enviroPng,
            worldmap: worldmap,
            environment: [
                { src: enviro1 },
                { src: enviro2 },
                { src: enviro3 },
                { src: enviro4 }
            ],
            productPng: productPng
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
.picWord{
  font-size:4vmin;
  font-weight: 900;
  color:white;
  position: absolute;
  text-shadow: black 0.1em 0.1em 0.2em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
.focusWord{
  color:#ffe593aa;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 6vmin;
  font-weight: 500;
}
.highlight-half{
  background: linear-gradient(to top, #c0c0c0aa 35%, transparent 35%);
}
.highlight{
  padding: 0 2px;
  white-space: pre-line;
  border-radius: 2px;
  background-color: #c0c0c0aa;
}
</style>
