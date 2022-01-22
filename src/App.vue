<template>
  <div>
    <router-view v-if="connected"></router-view>
    <div v-else>connecting...</div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useSocket } from "./composables/socket";

export default {
  setup() {
    const { checkConnection } = useSocket();

    const connected = computed(() => checkConnection());

    return { connected };
  },
};
</script>