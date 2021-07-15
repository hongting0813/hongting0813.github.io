<template>
  <v-btn-toggle
    v-show="width>1060?true:false"
    dark
    mandatory
  >
    <v-btn
      dark
      @click="setLang('tw')"
    >
      中文
    </v-btn>
    <v-btn
      dark
      @click="setLang('en')"
    >
      English
    </v-btn>
    <v-btn
      dark
      @click="setLang('jp')"
    >
      日本語
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
    computed: {
        width () {
            return this.$store.state.width
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
