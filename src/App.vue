<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    />

    <v-content :id="currentRouteName" class="main-content-wrap pt-10">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>

<style>
.main-content-wrap {
  background-color: #faf3f3;
}
#Enter_screen {
  background: #faf3f3 url(assets/bg_woman.svg) no-repeat left bottom;
}
</style>
