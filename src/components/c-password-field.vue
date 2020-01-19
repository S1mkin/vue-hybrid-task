<template>
  <v-text-field
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[rules.required, rules.min]"
    :type="show ? 'text' : 'password'"
    :name="field_name"
    rounded
    filled
    :label="field_label"
    hint="At least 8 characters"
    :value="field_value"
    class="input-group--focused"
    @click:append="show = !show"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    value: String
  },
  data() {
    return {
      field_name: this.name,
      field_label: this.label,
      field_value: this.value,
      show: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    doSomethingInParentComponentFunction(selectedDate) {
      this.$emit("selected", selectedDate);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
$text-field-dense-label-top: 100px !default;
</style>
