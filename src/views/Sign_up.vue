<template>
  <v-container class="text-center">
    <p class="headline font-weight-bold">Sign Up</p>

    <v-form
      ref="form"
      v-model="sign_up_valid"
      lazy-validation
      class="px-4 py-8 mr-2 ml-2 mt-6 mb-6 form-wrap"
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

      <v-row no-gutters>
        <v-col cols="8">
          <labelField label="Password"> </labelField>
        </v-col>
        <v-col cols="4" class="text-right pr-6">
          <v-tooltip top max-width="180">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">mdi-help-circle</v-icon>
            </template>
            Password must contain 8+ symbols, 1 special and 2 capital letters
          </v-tooltip>
        </v-col>
      </v-row>

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
        width="100%"
        class="text-capitalize"
        :disabled="!sign_up_valid"
        @click="sign_up_submit"
        >Sign Up</v-btn
      >
    </v-form>

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
          this.$store
            .dispatch("SIGN_UP", {
              username: this.sign_up_username,
              email: this.sign_up_email,
              password: this.sign_up_password
            })
            .then(() => this.$router.push("/sign_in"))
            .catch(err => console.log(err));
        } else {
          console.log("Error");
        }
      }
    }
  }
};
</script>
