<template>
  <v-container class="text-center">
    <p class="headline font-weight-bold">Sign Up</p>

    <v-form
      ref="form"
      v-model="sign_up_valid"
      lazy-validation
      class="px-4 py-8 mr-2 ml-2 mt-6 mb-6 form_wrap"
    >
      <labelField label="Full name"></labelField>
      <v-text-field
        v-model="sign_up_username"
        :rules="sign_up_username_rules"
        required
        rounded
        filled
      >
      </v-text-field>

      <labelField label="E-mail"></labelField>
      <v-text-field
        v-model="sign_up_email"
        :rules="sign_up_email_rules"
        required
        rounded
        filled
      >
      </v-text-field>

      <labelField label="Password"></labelField>
      <passwordField
        name="sign_up_password"
        v-model="sign_up_password"
      ></passwordField>

      <labelField label="Repeat password"></labelField>
      <passwordField
        name="sign_up_repeat_password"
        v-model="sign_up_repeat_password"
      ></passwordField>

      <v-btn
        depressed
        x-large
        rounded
        color="primary"
        class="text-capitalize"
        :disabled="!sign_up_valid"
        @click="sign_up_submit"
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
      sign_up_password: "",
      sign_up_repeat_password: "",

      sign_up_valid: true,
      sign_up_username_rules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      sign_up_email_rules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },
  methods: {
    sign_up_submit() {
      if (this.$refs.form.validate()) {
        if (this.sign_up_password == this.sign_up_repeat_password) {
          console.log("Form sending");
        } else {
          console.log("Error");
        }
      }
    }
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
