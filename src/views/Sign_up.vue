<template>
  <v-container class="text-center">
    <h1 class="headline font-weight-bold">Sign Up</h1>

    <v-form
      ref="form"
      v-model="form.error"
      lazy-validation
      class="px-4 py-8 mt-6 mb-6 form"
    >
      <label class="form__label">Full name</label>
      <v-text-field
        v-model="form.username.value"
        :rules="form.username.rules"
        required
        rounded
        filled
      >
      </v-text-field>

      <label class="form__label">E-mail</label>
      <v-text-field
        v-model="form.email.value"
        :rules="form.email.rules"
        required
        rounded
        filled
      >
      </v-text-field>

      <v-row no-gutters>
        <v-col cols="8">
          <label class="form__label">Password</label>
        </v-col>
        <v-col cols="4" class="text-right pr-6">
          <v-tooltip top max-width="180">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="title">mdi-help-circle</v-icon>
            </template>
            Password must contain 8+ symbols, 1 special and 2 capital letters
          </v-tooltip>
        </v-col>
      </v-row>

      <v-text-field
        :append-icon="form.password.show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="form.password.rules"
        :type="form.password.show ? 'text' : 'password'"
        v-model="form.password.value"
        rounded
        filled
        class="password"
        @click:append="form.password.show = !form.password.show"
        required
      ></v-text-field>

      <label class="form__label">Repeat password</label>
      <v-text-field
        :append-icon="form.passwordConfirm.show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="form.passwordConfirm.rules"
        :type="form.passwordConfirm.show ? 'text' : 'password'"
        v-model="form.passwordConfirm.value"
        rounded
        filled
        class="password"
        @click:append="form.passwordConfirm.show = !form.passwordConfirm.show"
        required
      ></v-text-field>

      <v-btn
        depressed
        x-large
        rounded
        color="primary"
        width="100%"
        class="text-capitalize mt-4"
        :disabled="!form.error"
        @click="SIGN_UP_SUBMIT"
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
export default {
  name: "sign_up",
  data() {
    return {
      form: {
        username: {
          value: "",
          rules: [
            value => !!value || "Name is required",
            value =>
              (value && value.length <= 10) ||
              "Name must be less than 50 characters"
          ]
        },
        email: {
          value: "",
          rules: [
            value => !!value || "E-mail is required",
            value =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(value) ||
              "E-mail must be valid"
          ]
        },
        password: {
          value: "",
          rules: [
            value => !!value || "Password required",
            value => value.length >= 8 || "Min 8 characters",
            value =>
              /^.*[A-Z]+.*[A-Z]+.*$/.test(value) ||
              "Password must be 2 captital letters",
            value =>
              /^.*\W+.*$/.test(value) ||
              "Password must contain at least one special character"
          ],
          show: false
        },
        passwordConfirm: {
          value: "",
          rules: [
            value => !!value || "Password required",
            value => value.length >= 8 || "Min 8 characters",
            value =>
              value == this.form.password.value ||
              "The password and confirmation password do not match"
          ],
          show: false
        }
      },
      error: null
    };
  },
  methods: {
    SIGN_UP_SUBMIT() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("SIGN_UP", {
            username: this.form.username.value,
            email: this.form.email,
            password: this.form.password
          })
          .then(() => this.$router.push("/sign_in"))
          .catch(err => (this.form.error = err));
      }
    }
  }
};
</script>
