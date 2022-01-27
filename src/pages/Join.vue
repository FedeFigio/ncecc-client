<template>
  <MainLayout>
    <Card title="accedi" class="text-black max-h-full">
      <div class="flex flex-col">
        <label class="font-luckiest-guy">USERNAME</label>
        <input
          placeholder="USERNAME"
          class="input-primary"
          type="text"
          v-model="username"
        />
      </div>
      <div class="font-luckiest-guy">ROOMS</div>

      <div class="flex flex-col h-[100%] overflow-y-auto space-y-4 max-w-full">
        <button
          class="btn-primary"
          v-for="room in rooms"
          :key="room.id"
          @click="goToRoom(room)"
          :disabled="username == ''"
        >
          {{ room.id }}
        </button>
        <button class="btn-primary">pinoasxfgbfgbfgbfg</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
        <button class="btn-primary">pino</button>
      </div>
    </Card>
  </MainLayout>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useSocket } from "../composables/socket";
import { useState } from "../composables/state";
import { useRouter } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Card from "../components/Card.vue";

export default {
  setup() {
    // router
    const router = useRouter();
    // state
    const { setRoom } = useState();
    // socket connection
    const loading = ref(true);
    const { getRooms, rooms } = useSocket();
    // rooms
    onMounted(() => {
      getRooms();
    });
    // username
    const username = ref("");
    // go to room
    function goToRoom(room) {
      setRoom(room);
      router.push("/waiting-room");
    }
    return { loading, rooms, username, goToRoom };
  },
  components: { MainLayout, Card },
};
</script>
