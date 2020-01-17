/* eslint-disable */

<template>

  <v-container>

    Ready for a great User experience?

    Bring your media to the next level!

    <v-row>
      <v-col
        cols="6"
        sm="6"
      >
        
        <v-text-field
          v-model="label"
          label="Label"
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
