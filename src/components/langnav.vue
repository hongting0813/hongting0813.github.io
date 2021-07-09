<template>
  <v-btn-toggle
    v-show="width>1060?true:false"
    dark
    mandatory
  >
    <v-btn
      dark
    >
      中文
    </v-btn>
    <v-btn
      dark
    >
      English
    </v-btn>
    <v-btn
      dark
    >
      日本語
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
    computed: {
        width () {
            console.log(this.$store.state.width)
            return this.$store.state.width
        }
    }
}
</script>
