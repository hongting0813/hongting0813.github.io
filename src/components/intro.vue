<template>
  <v-container>
    <div class="bigTitle whiteText centerText elementCenter wow bounceInUp">
      億能幫你達成10,000,000個可能 :)
    </div>
    <div :class="$vuetify.breakpoint.xs ? 'helloxs' :'hellolg' ">
      <h2>test</h2>
    </div>
  </v-container>
</template>

<script>
export default {
    computed: {
        isVisible () {
            return !this.$store.state.isMobile
        }
    }
}
</script>

<style>

</style>
