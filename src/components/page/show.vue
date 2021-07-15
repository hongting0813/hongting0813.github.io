<template>
  <v-container
    fluid
  >
    <v-row justify="center">
      <div
        class="focusWord ma-5"
        style="font-size:10vmin;"
      >
        {{ $t('product_pic_wall') }}
      </div>
    </v-row>
    <v-row>
      <div
        class="d-flex flex-wrap justify-space-around ma-5"
      >
        <v-img
          v-for="(item,i) in picwall"
          :key="i"
          :src="item.src"
          :lazy-src="lazyPng"
          :max-width="250"
          class="picBorder ma-2"
          style="cursor: pointer"
          @click="showPic(i)"
        />
      </div>
      <!-- 瀑布式 -->
      <!-- <div class="masonry">
        <div
          v-for="(item,i) in picwall"
          :key="i"
          class="item"
        >
          <img
            class="picBorder"
            :src="item.src"
            alt=""
          >
        </div>
      </div> -->
    </v-row>
    <v-dialog
      v-model="dialog"
      :max-width="width*($vuetify.breakpoint.mobile?0.8:0.6)"
      :overlay-color="($vuetify.breakpoint.mobile?'rgb(255,255,255,0.5)':'rgb(0,0,0)')"
    >
      <v-card
        :dark="$vuetify.breakpoint.mobile?true:false"
      >
        <v-card-title
          class="text-h5 justify-center"
          :class="$vuetify.breakpoint.mobile?'focusWord':''"
        >
          {{ $t('display') }}
        </v-card-title>
        <v-card-text>
          <v-img
            v-touch="{
              left: () => nextPic(),
              right: () => prePic(),
            }"
            :src="picwall[index].src"
            :max-height="$vuetify.breakpoint.mobile?height:height*0.8"
            contain
          >
            <v-icon
              v-show="$vuetify.breakpoint.mobile?false:true"
              style="position:absolute;left:5%;top:45%;"
              color="rgb(0,0,0,0.8)"
              x-large
              @click="prePic()"
            >
              mdi-arrow-left-drop-circle
            </v-icon>
            <v-icon
              v-show="$vuetify.breakpoint.mobile?false:true"
              color="rgb(0,0,0,0.8)"
              style="position:absolute;right:5%;top:45%;"
              x-large
              @click="nextPic()"
            >
              mdi-arrow-right-drop-circle
            </v-icon>
          </v-img>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import p1 from '../../assets/img/products/pic1.jpg'
import p2 from '../../assets/img/products/pic2.jpg'
import p3 from '../../assets/img/products/pic3.jpg'
import p4 from '../../assets/img/products/pic4.jpg'
import p5 from '../../assets/img/products/pic5.jpg'
import p6 from '../../assets/img/products/pic6.jpg'
import p7 from '../../assets/img/products/pic7.jpg'
import p8 from '../../assets/img/products/pic8.jpg'
import p9 from '../../assets/img/products/pic9.jpg'
import p10 from '../../assets/img/products/pic10.jpg'
import p11 from '../../assets/img/products/pic11.jpg'
import p12 from '../../assets/img/products/pic12.jpg'
import p13 from '../../assets/img/products/pic13.jpg'
import p14 from '../../assets/img/products/pic14.jpg'
import p15 from '../../assets/img/products/pic15.jpg'
import p16 from '../../assets/img/products/pic16.jpg'
import p17 from '../../assets/img/products/pic17.jpg'
import p18 from '../../assets/img/products/pic18.jpg'
import p19 from '../../assets/img/products/pic19.jpg'
import p20 from '../../assets/img/products/pic20.jpg'
import lazyPng from '../../assets/img/lazy.png'

export default {
    data () {
        return {
            picwall: [
                { src: p1 }, { src: p2 }, { src: p3 }, { src: p4 }, { src: p5 },
                { src: p6 }, { src: p7 }, { src: p8 }, { src: p9 }, { src: p10 },
                { src: p11 }, { src: p12 }, { src: p13 }, { src: p14 }, { src: p15 },
                { src: p16 }, { src: p17 }, { src: p18 }, { src: p19 }, { src: p20 }
            ],
            lazyPng: lazyPng,
            dialog: false,
            index: 0
        }
    },
    computed: {
        height () {
            return this.$store.state.height - (this.$vuetify.breakpoint.mobile ? 100 : 75)
        },
        width () {
            return this.$store.state.width
        }
    },
    methods: {
        showPic (index) {
            this.dialog = true
            this.index = index
        },
        prePic () {
            if (this.index > 0) this.index = this.index - 1
        },
        nextPic () {
            if (this.index < this.picwall.length - 1) this.index = this.index + 1
        }
    }
}
</script>
<style scoped>
.picIcon{
  position: absolute;
  top: 50%;
  left: 50%;
    transform: translate(-50%, -50%);

}
/*  */
.masonry {
  column-count: 5;
  column-gap: 0;
  margin: 60px;
}

.item {
  padding: 2px;
  margin: 2px;
  position: relative;
}

.item img {
  display: block;
  width: 100%;
  height: auto;
}

.item::after {
  position: absolute;
  display: block;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  background-color: #000;
  color: #fff;
}
/* css來源：https://segmentfault.com/a/1190000024512687 */
</style>
