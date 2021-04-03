<template>
  <v-app>
    <div class="container">
      <h1>Yineng</h1>
      <v-btn>hello</v-btn>
      <v-btn
          class="ma-2"
          text
          icon
          color="blue lighten-2"
        >
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
  
        <v-btn
          class="ma-2"
          text
          icon
          color="red lighten-2"
        >
          <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
        <div>
          <img
            src="./src/assets/img/logo.png"
        ></img>
        </div>
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      bundler: "Parcel"
    };
  }
});
</script>

<style scoped>
.container {
  color: green;
}
</style>