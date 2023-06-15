<template>
  <v-container>
    <v-row justify="center">
      <div
        class="focusWord ma-5"
        style="font-size:10vmin;"
      >
        {{ $t('company_member') }}
      </div>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        v-for="(item,index) in info"
        :key="index"
        cols="12"
        md="6"
        lg="5"
      >
        <v-card
          class="mx-auto"
          dark
        >
          <v-list-item>
            <v-list-item-avatar
              size="100"
              class="my-10 ml-5 mr-10"
            >
              <v-img
                v-if="item.src!=''"
                :src="item.src"
              />
              <v-icon
                v-else
                size="80"
              >
                mdi-account-circle
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.occupation }}</v-list-item-subtitle>
              <div class="mt-2">
                <v-chip
                  v-for="tag in item.tag"
                  :key="tag.icon"
                  color="#ffe593aa"
                  label
                  outlined
                  class="ma-1"
                >
                  <v-icon left>
                    {{ tag.icon }}
                  </v-icon>
                  {{ tag.content }}
                </v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import emilyPic from '/src/assets/img/member/emily.jpg'
export default {
    data () {
        return {
            info: [
                { name: '羅正忠', occupation: '總經理', src: '', tag: [{ name: 'email', content: 'luo12392@gmail.com', icon: 'mdi-email' }] },
                { name: '羅xx', occupation: '總經理', src: '', tag: [{ name: 'email', content: 'luo12392@gmail.com', icon: 'mdi-email' }] },
                { name: '羅正忠', occupation: '總經理', src: '', tag: [{ name: 'email', content: 'luo12392@gmail.com', icon: 'mdi-email' }] },
                { name: '羅xx', occupation: '總經理', src: '', tag: [{ name: 'email', content: 'luo12392@gmail.com', icon: 'mdi-email' }] }
            ]
        }
    }
}
</script>
