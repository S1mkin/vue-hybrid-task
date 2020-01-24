<template>
  <v-container class="text-center">
    <p class="headline font-weight-bold">Sign In</p>

    <v-form
      ref="form"
      :lazy-validation="lazy"
      class="px-4 py-8 mt-6 mb-6 form-wrap"
    >
      <labelField label="E-mail"></labelField>
      <v-text-field rounded filled v-model="sign_in_email"> </v-text-field>

      <labelField label="Password"></labelField>
      <passwordField
        name="sign_in_password"
        v-model="sign_in_password"
      ></passwordField>

      <v-btn
        depressed
        x-large
        rounded
        color="primary"
        width="100%"
        class="text-capitalize"
        @click="SIGN_IN_SUBMIT"
        >Sign In</v-btn
      >
    </v-form>

    <p>
      Don't have an account yet?
      <v-spacer></v-spacer>
      <router-link to="/sign_up">Sign Up</router-link>
    </p>

    <div class="form-alert-wrap" v-if="sign_in_error !== ''">
      <v-alert>
        <v-row align="center">
          <v-col class="grow py-0 pr-0">{{ sign_in_error }}</v-col>
          <v-col class="shrink py-0 pl-0">
            <v-icon dark @click="CLOSE_ALERT">mdi-close</v-icon>
          </v-col>
        </v-row>
      </v-alert>
    </div>
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
      sign_in_password: "",
      sign_in_error: ""
    };
  },
  computed: {
    REMOVE_ALERT() {
      return this.sign_in_email && this.sign_in_password;
    }
  },
  methods: {
    SIGN_IN_SUBMIT() {
      this.sign_in_error = "";

      this.$store
        .dispatch("SIGN_IN", {
          email: this.sign_in_email,
          password: this.sign_in_password
        })
        .then(() => {
          console.log("Sign In success");
          this.$router.push({ name: "Main" });
        })
        .catch(err => (this.sign_in_error = err));
    },
    // custom close icon for alert
    CLOSE_ALERT() {
      this.sign_in_error = "";
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.form-alert-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  width: 100%;
  .v-alert {
    background-color: #ff6683;
    border-radius: 50px;
    color: #fff;
    width: 100%;
    .v-icon {
      cursor: pointer;
    }
  }
}
</style>
