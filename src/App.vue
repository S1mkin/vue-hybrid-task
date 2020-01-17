<template>
  <v-app>

    <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">

    <v-content class="pt-10">
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
  background-color: #FAF3F3;
}
</style>