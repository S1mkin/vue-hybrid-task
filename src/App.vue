<template>
  <v-app>

    <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">

    <v-app-bar app>
      
      <v-toolbar-title class="headline text-uppercase">
        <span>VUE</span> <span class="font-weight-light">HYBRID</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-btn text to="/">
        <v-icon left>home</v-icon> <span class="mr-2">Main</span>
      </v-btn>
      <v-btn text to="/about">
        <v-icon left>info</v-icon> <span class="mr-2">About</span>
      </v-btn>

    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
main {
  background: #FAF3F3;
  background: url(assets/bg_woman.svg);
}
</style>