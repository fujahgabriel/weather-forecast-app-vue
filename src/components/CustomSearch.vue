<template>
    <input
      type="text"
      v-model="inputValue"
      :placeholder="placeholder"
      class="bg-gray-100 p-3 md:w-[400px] w-full rounded-lg focus:outline-none"
      @input="onInput"
    />
  </template>
  
  <script>
  export default {
    name: "CustomSearch",
    props: {
      modelValue: {
        type: String,
        default: "",
      },
      placeholder: {
        type: String,
        default: "Search...",
      },
    },
    computed: {
      inputValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
    },
    methods: {
      onInput(event) {
        this.$emit("input", event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add more scoped styles here if needed */
  </style>
  