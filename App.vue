<template>
  <v-app class="container">
    <v-app-bar
      app
      shrink-on-scroll
      color="rgb(0,0,0,0.1)"
      :collapse-on-scroll="true"
    >
      <v-img
        max-height="80"
        max-width="80"
        :src="logo"
      />

    </v-app-bar>
      <v-main> 
      <h1>
        hello
      </h1>
      </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import logo from './src/assets/img/logo-golden.png'

export default Vue.extend({
  data() {
    return {
      logo: logo,
      bundler: "Parcel"
    };
  }
});
</script>

<style scoped>
.container {
  max-width: none;
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  background-blend-mode: multiply,multiply;
}
.bg { 
	/* Generated with http://gradient.quasi.ink */
	background-size: cover;
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAADCAYAAABfwxXFAAAAAXNSR0IArs4c6QAAAGBJREFUCB1jtNW3/29mp8Owb+9ZBjYWfgZGxu8M3NxcDFzcPAxMRsbKDC+fvWDw8vRgYGZmYODnBypgYGJ4//49A5Orqx3Dj28fGE6fOMnAwcYAFPzI8OXrV4Y/f/4wAAC/Phu5I0EVFAAAAABJRU5ErkJggg==");
}
</style>