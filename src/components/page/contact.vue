<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        lg="7"
      >
        <v-card
          dark
        >
          <v-card-title>{{ $t('contacts') }}</v-card-title>
          <v-card-text>
            <v-list two-line>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#ffe593aa">
                    mdi-phone
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ contact.tel }}</v-list-item-title>
                  <v-list-item-subtitle>{{ $t('telephone') }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action />

                <v-list-item-content>
                  <v-list-item-title>{{ contact.phone }}</v-list-item-title>
                  <v-list-item-subtitle>{{ $t('mobile_phone') }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset />

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#ffe593aa">
                    mdi-email
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ contact.email }}</v-list-item-title>
                  <v-list-item-subtitle>{{ $t('work') }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-divider />
          <v-card-title>{{ $t('address_title') }}</v-card-title>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#ffe593aa">
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="wrap-text">
                  {{ $t('address') }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon />
              <v-list-item-content>
                <v-img
                  :src="locationPng"
                  :lazy-src="lazyPng"
                  max-width="125px"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider />
          <v-card-title>{{ $t('service_hours_title') }}</v-card-title>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#ffe593aa">
                  mdi-clock
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="wrap-text">
                  {{ $t('service_hours') }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import locationPng from '../../assets/img/contact/location.png'
import lazyPng from '../../assets/img/lazy.png'
export default {
    data () {
        return {
            locationPng: locationPng,
            lazyPng: lazyPng,
            contact: {
                tel: '+86 (0755)2972-3260',
                phone: '+86 13923719729',
                email: 'luo12392@hotmail.com'
            }
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
.wrap-text {
  white-space: normal;
}
</style>
