<template>
  <v-container class="text-center">
    <p class="headline font-weight-bold">Sign Up</p>

    <v-form
      ref="form"
      :lazy-validation="lazy"
      class="px-4 py-8 mr-2 ml-2 mt-6 mb-6 form_wrap"
    >
      <labelField label="Full name"></labelField>
      <v-text-field rounded filled v-model="sign_up_username"> </v-text-field>

      <labelField label="E-mail"></labelField>
      <v-text-field rounded filled v-model="sign_up_email"> </v-text-field>

      <labelField label="Password"></labelField>
      <passwordField
        name="sign_up_password"
        v-model="sign_up_password_value"
      ></passwordField>

      <labelField label="Repeat password"></labelField>
      <passwordField
        name="sign_up_repeat_password"
        v-model="sign_up_repeat_password_value"
      ></passwordField>

      <v-btn
        depressed
        x-large
        rounded
        color="primary"
        class="text-capitalize"
        to="/sign_up"
        >Sign Up</v-btn
      >
    </v-form>

    Password must contain 8+ symbols, 1 special and 2 capital letters

    <p>
      Already have an account?
      <v-spacer></v-spacer>
      <router-link to="/sign_in">Sign In</router-link>
    </p>
  </v-container>
</template>

<script>
import labelField from "../components/c-label-field.vue";
import passwordField from "../components/c-password-field.vue";

export default {
  name: "sign_up",
  components: {
    labelField,
    passwordField
  },
  data() {
    return {
      sign_up_username: "",
      sign_up_email: "",
      sign_up_password_value: "",
      sign_up_repeat_password_value: ""
    };
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.form_wrap {
  background: #fff;
  border-radius: 20px;
}

$text-field-filled-full-width-outlined-slot-min-height: 96px !default;
</style>
