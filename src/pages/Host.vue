<template>
  <div>
    <h1>HOST</h1>
    <input type="text" placeholder="room" v-model="form.room" required />
    <input
      type="text"
      placeholder="username"
      v-model="form.username"
      required
    />
    <button @click="startHosting" :disabled="loading">CREATE ROOM</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useSocket } from "../composables/socket";
import { useState } from "../composables/state";
import { useRouter } from "vue-router";

export default {
  setup() {
    // form
    const form = reactive({
      room: null,
      username: null,
    });

    // router
    const router = useRouter();

    // socket connection
    const loading = ref(false);
    const { startHosting: sh } = useSocket();

    async function startHosting() {
      loading.value = true;
      await sh(form);
      router.push("/waiting-room");
      loading.value = false;
    }

    return { form, startHosting, loading };
  },
};
</script>
