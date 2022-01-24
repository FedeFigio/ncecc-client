<template>
  <div>
    <h1>WAITING ROOM</h1>

    <button @click="requestStart">START</button>
  </div>
</template>

<script>
import { useSocket } from "../composables/socket";
import { useState } from "../composables/state";

export default {
  setup() {
    // state
    const { user } = useState();

    // socket connection
    const { requestStart: rs } = useSocket();

    async function requestStart() {
      console.log(user);
      //   const response = await rs(user);
    }

    return { requestStart };
  },
};
</script>
