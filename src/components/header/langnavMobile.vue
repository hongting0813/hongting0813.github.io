<template>
  <v-menu
    bottom
    left
    class="hidden"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="#ffe593aa"
        v-bind="attrs"
        rounded
        icon
        v-on="on"
      >
        <v-icon small>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-list
      color="#b09f5b"
    >
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        dense
        @click="setLang(item.lang)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
    data () {
        return {
            items: [
                { title: '中文', lang: 'tw' },
                { title: 'English', lang: 'en' },
                { title: '日本語', lang: 'jp' }
            ]
        }
    },
    methods: {
    // 儲存切換的語系
        setLang (value) {
            this.$store.commit('setLang', value)
            this.$i18n.locale = value
        }
    }
}
</script>
