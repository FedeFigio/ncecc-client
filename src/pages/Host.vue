<template>
  <div>
    <h1>HOST</h1>
    <input type="text" placeholder="room" v-model="form.room" />
    <input type="text" placeholder="username" v-model="form.username" />
    <button @click="startHosting">CREATE ROOM</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useSocket } from "../composables/socket";

export default {
  setup() {
    // form
    const form = reactive({
      room: null,
      username: null,
    });

    // socket connection
    const { startHosting: sh } = useSocket();

    async function startHosting() {
      const response = await sh(form);
      console.log("response", response);
    }

    return { form, startHosting };
  },
};
</script>