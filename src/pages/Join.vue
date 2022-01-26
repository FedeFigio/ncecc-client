<template>
  <div>
    <h1>JOIN</h1>
    <div>
      <label>Username</label>
      <input type="text" v-model="username" />
    </div>

    <div class="flex flex-col space-y-4">
      <button v-for="room in rooms" :key="room.id" @click="goToRoom(room)" :disabled="username == ''">{{ room.id }}</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useSocket } from "../composables/socket";
import { useState } from "../composables/state";
import { useRouter } from "vue-router";

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
};
</script>
