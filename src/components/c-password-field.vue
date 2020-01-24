<template>
  <v-text-field
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[rules.required, rules.min]"
    :type="show ? 'text' : 'password'"
    :name="field_name"
    v-model="proxyValue"
    rounded
    filled
    class="input-group--focused"
    @click:append="show = !show"
    required
  ></v-text-field>
</template>

<script>
export default {
  props: {
    name: String,
    value: String
  },
  data() {
    return {
      field_name: this.name,
      field_value: "",
      show: false,
      rules: {
        required: value => !!value || "Password required",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  computed: {
    proxyValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.v-input .theme--light.v-icon {
  color: #1e1a3e;
}
</style>
