<template>
  <v-footer
    app
    color="primary lighten-2"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary lighten-1 py-4 text-center white--text"
        cols="12"
      >
        <v-row
          justify="center"
          align="center"
          class="pa-2"
        >
          <v-col
            cols="2"
          >
            <v-row justify="center">
              <v-col>
                <v-row justify="center">
                  <v-icon>
                    mdi-phone
                  </v-icon>
                  <h4>電話 TEL</h4>
                </v-row>
                <v-row justify="center">
                  {{ footer.tel }}
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="4"
          >
            <v-row justify="center">
              <v-col>
                <v-row justify="center">
                  <v-icon>
                    mdi-map-marker
                  </v-icon>
                  <h4>地址 address</h4>
                </v-row>
                <v-row justify="center">
                  {{ footer.add[0] }}
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        <v-row
          justify="center"
          class="ma-2"
        >
          億能手袋電壓製品廠 Yineng Manufactory
        </v-row>

        <v-row
          justify="center"
          class="ma-2"
        >
          ©{{ new Date().getFullYear() }}&nbsp;—&nbsp;<strong>億能 Yineng</strong>&nbsp;版權所有
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    data () {
        return {
            footer: {
                tel: '+86 (0755)2687-3260',
                add: ['深圳市寶安區新橋街道辦新發工業區新發一路5號2F', '2F, NO.5, XIN-FA FIRST ROAD, XIN-FA INDUSTRIAL AREA, XINQIAO STREET, BAOAN DISTRICT, SHENZHEN, GUANGDONG PROVINCE,CHINA']
            }
        }
    },
    computed: {
        isVisible () {
            return !this.$store.state.isMobile
        }
    }
}
</script>
