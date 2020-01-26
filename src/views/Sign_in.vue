<template>
  <v-container class="text-center">
    <h1 class="headline font-weight-bold">Sign In</h1>

    <v-form ref="form" :lazy-validation="lazy" class="px-4 py-8 mt-6 mb-6 form">
      <labelField label="E-mail"></labelField>
      <v-text-field
        v-model="form.email.value"
        :rules="form.email.rules"
        required
        rounded
        filled
      >
      </v-text-field>

      <labelField label="Password"></labelField>
      <v-text-field
        :append-icon="form.password.show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="form.password.rules"
        :type="form.password.show ? 'text' : 'password'"
        v-model="form.password.value"
        rounded
        filled
        class="input-group--focused field-password"
        @click:append="form.password.show = !form.password.show"
        required
      ></v-text-field>

      <v-btn
        depressed
        x-large
        rounded
        color="primary"
        width="100%"
        class="text-capitalize mt-4"
        @click="SIGN_IN_SUBMIT"
        >Sign In</v-btn
      >
    </v-form>

    <p>
      Don't have an account yet?
      <v-spacer></v-spacer>
      <router-link to="/sign_up">Sign Up</router-link>
    </p>

    <div class="form-alert-wrap" v-if="form.error !== null">
      <v-alert>
        <v-row align="center">
          <v-col class="grow py-0 pr-0">{{ form.error }}</v-col>
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

export default {
  name: "sign_in",
  components: {
    labelField
  },
  data() {
    return {
      form: {
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
            value => value.length >= 8 || "Min 8 characters"
          ],
          show: false
        },
        error: null
      }
    };
  },
  methods: {
    SIGN_IN_SUBMIT() {
      this.form.error = null;

      this.$store
        .dispatch("SIGN_IN", {
          email: this.form.email.value,
          password: this.form.password.value
        })
        .then(() => {
          console.log("Sign In success");
          this.$router.push({ name: "Main" });
        })
        .catch(err => (this.form.error = err));
    },
    // custom close icon for alert
    CLOSE_ALERT() {
      this.form.error = null;
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
