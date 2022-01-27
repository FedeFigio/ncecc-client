<template>
  <button @click="clickDio">
    <slot />
  </button>
</template>

<script>
export default {
  props: ["modelValue", "pino"],

  emits: ["cliccone", "update:modelValue", "update:pino"],

  setup(props, { emit }) {
    console.log(props);

    function clickDio(ev) {
      emit("cliccone", { evento: ev, diocane: true });
      emit("update:modelValue", props.modelValue + 1);
      emit("update:pino", props.pino + 2);
    }

    return { clickDio };
  },
};
</script>
