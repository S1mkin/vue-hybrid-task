<template>
  <v-container id="main-page" class="text-center">

        <p class="display-1">Ready for a great<br>User experience?</p>

        <p class="mb-12">Bring your media to the next level!</p>

        <v-btn 
          depressed 
          x-large
          rounded
          color="#FFF"
          class="text-capitalize mr-4"
          to="/sign_up"
        >Sign Up</v-btn>

        <v-btn 
          class="mx-2"
          depressed
          fab 
          dark 
          color="#1E1A3E">
          <v-icon dark>mdi-arrow-right</v-icon>
        </v-btn>

  </v-container>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "enter_screen",
  components: {
    //HelloWorld
  }
};
</script>

<style scoped>
#main-page {
  background: #FAF3F3 url(/assets/bg_woman.svg) no-repeat left bottom;
}
</style>