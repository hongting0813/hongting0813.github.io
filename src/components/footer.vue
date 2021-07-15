<template>
  <v-footer
    color="primary lighten-2"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary lighten-1 py-4 text-center white--text"
      >
        <v-row
          justify="center"
          align="center"
          class="pa-2"
        >
          <!-- 1 -->
          <v-col
            cols="12"
            md="3"
          >
            <v-row justify="center">
              <v-col>
                <v-row justify="center">
                  <v-icon>
                    mdi-phone
                  </v-icon>
                  <h4>{{ $t('telephone') }}</h4>
                </v-row>
                <v-row justify="center">
                  {{ footer.tel }}
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <!-- 2 -->
          <v-col
            cols="12"
            :md="$store.state.lang=='tw'?3:9"
            :class="($vuetify.breakpoint.mdAndDown?'mt-2':'')"
          >
            <v-row
              justify="center"
            >
              <v-col>
                <v-row justify="center">
                  <v-icon>
                    mdi-map-marker
                  </v-icon>
                  <h4>{{ $t('address_title') }}</h4>
                </v-row>
                <v-row justify="center">
                  {{ $t('address') }}
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-col
      class="primary lighten-2 py-4 text-center white--text"
      cols="12"
    >
      <v-row
        justify="center"
        class="mt-1 mb-1"
      >
        億能手袋電壓製品廠 Yineng Manufactory
      </v-row>

      <v-row
        justify="center"
        class="mt-1 mb-1"
      >
        ©{{ new Date().getFullYear() }}&nbsp;&nbsp;<strong>億能 Yineng</strong>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
    data () {
        return {
            footer: {
                tel: '+86 (0755)2972-3260'
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
