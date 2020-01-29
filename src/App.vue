<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    />
    <v-content :id="currentRouteName">
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

<style lang="scss" rel="stylesheet/scss">
body {
  background-color: #444;
}
#app {
  background-color: $main-bg-color;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
  main {
    margin: 0 auto;
    width: 100%;
    padding: 40px 0 0 !important;
  }

  #Enter_screen {
    background: $main-bg-color url(assets/bg_woman.svg) no-repeat left bottom;
  }
}
</style>
