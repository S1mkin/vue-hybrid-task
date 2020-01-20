<template>
  <v-container class="text-center">
    <p class="headline font-weight-bold">Sign In</p>

    <v-form
      ref="form"
      :lazy-validation="lazy"
      class="px-4 py-8 mr-2 ml-2 mt-6 mb-6 form_wrap"
    >
      <labelField label="E-mail"></labelField>
      <v-text-field rounded filled v-model="sign_in_email"> </v-text-field>

      <labelField label="Password"></labelField>
      <passwordField name="sign_in_password"></passwordField>

      <v-btn
        depressed
        x-large
        rounded
        color="primary"
        width="100%"
        class="text-capitalize"
        to="/sign_in"
        >Sign In</v-btn
      >
    </v-form>

    <p>
      Don't have an account yet?
      <v-spacer></v-spacer>
      <router-link to="/sign_up">Sign Up</router-link>
    </p>
  </v-container>
</template>

<script>
import labelField from "../components/c-label-field.vue";
import passwordField from "../components/c-password-field.vue";

export default {
  name: "sign_in",
  components: {
    labelField,
    passwordField
  },
  data() {
    return {
      sign_in_email: "",
      sign_in_password_value: ""
    };
  }
};
</script>

<style scoped>
.form_wrap {
  background: #fff;
  border-radius: 20px;
}
</style>
