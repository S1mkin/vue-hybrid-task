<template>
  <v-container class="text-center">

    <p class="display-1">Sign Up</p>

    <v-form
      ref="form"
      :lazy-validation="lazy"
       class="px-4 py-8 mr-2 ml-2 mt-6 mb-6 form_wrap"
    >

            <v-text-field
                label="Full name"
                rounded
                filled
            >
            </v-text-field>

            <v-text-field
                label="E-mail"
                rounded
                filled
            >
            </v-text-field>

            <v-btn 
            depressed 
            x-large
            rounded
            color="primary"
            class="text-capitalize"
            to="/sign_up"
            >Sign Up</v-btn>

    </v-form>

    <p>Already have an account?
        <v-spacer></v-spacer>
        <router-link to="/">Sign In</router-link>
    </p>

  </v-container>

</template>

<script>
export default {
  name: "sign_up",
  components: {

  }
};
</script>

<style scoped>
    .form_wrap {
        background: #FFF;
        border-radius: 20px;
    }
</style>