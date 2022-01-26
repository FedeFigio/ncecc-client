<template>
  <div>
    <h1>WAITING ROOM</h1>

    <div>
      <h2 class="mb-2">Players</h2>
      <div v-for="player in players" :key="player.id" class="font-bold">{{ player.username }}</div>
    </div>

    <button @click="requestStart">START</button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useSocket } from "../composables/socket";
import { useState } from "../composables/state";
import { useRouter } from "vue-router";

export default {
  setup() {
    // router
    const router = useRouter();

    // state
    const { user, room } = useState();
    if (!room) router.push("/");

    // socket connection
    const { requestStart: rs, getPlayers, players } = useSocket();

    // players
    onMounted(() => {
      getPlayers(room);
    });

    // request start
    async function requestStart() {
      console.log(user);
      // const response = await rs(user);
    }

    return { requestStart, players };
  },
};
</script>
