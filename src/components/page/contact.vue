<template>
  <v-container>
    <v-card
      dark
    >
      <v-card-title>聯絡方式</v-card-title>
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
              <v-list-item-subtitle>Company</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action />

            <v-list-item-content>
              <v-list-item-title>{{ contact.phone }}</v-list-item-title>
              <v-list-item-subtitle>Telephone</v-list-item-subtitle>
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
              <v-list-item-subtitle>Work</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-card-title>公司地址</v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#ffe593aa">
                mdi-map-marker
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="wrap-text">
                {{ contact.addr }}
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
        <v-card-title>營業時間</v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#ffe593aa">
                mdi-clock
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="wrap-text">
                {{ contact.worktime }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
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
                addr: '深圳市寶安區新橋街道新二社區莊村路64號3F',
                email: 'luo12392@hotmail.com',
                worktime: '週一至週五 8:00～17:00'
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
