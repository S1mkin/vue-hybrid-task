<template>
  <v-container class="text-center">
    <p class="headline font-weight-bold">
      Ready for a great<br />User experience?
    </p>

    <p class="mb-12">Bring your media to the next level!</p>

    <v-btn
      depressed
      x-large
      rounded
      color="#FFF"
      class="text-capitalize mr-4"
      to="/sign_up"
      >Sign Up</v-btn
    >

    <v-btn class="mx-2" depressed fab dark color="#1E1A3E" to="/sign_in">
      <v-icon dark>mdi-arrow-right</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "enter_screen",
  components: {}
};
</script>
