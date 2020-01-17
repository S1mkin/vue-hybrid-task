/* eslint-disable */

<template>

  <v-container class="text-center">

    <v-row 
      align-content="center"
      align="center"
      justify="center"
    >
      <v-col
        cols="2"
        sm="6"
        xs="12"
      >


        <p class="display-1">Ready for a great<br>User experience?</p>

        <p class="">Bring your media to the next level!</p>

        <v-btn 
          depressed 
          x-large
          rounded
          color="#FFF"
          class="text-capitalize"
        >Sign Up</v-btn>

        <v-btn 
          class="mx-2"
          depressed
          fab 
          dark 
          color="#1E1A3E">
          <v-icon dark>mdi-arrow-right</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <br>
        
        <v-text-field
          label="User name"
          outlined
          rounded
        ></v-text-field>

      </v-col>
    </v-row>
  </v-container>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    //HelloWorld
  }
};
</script>
