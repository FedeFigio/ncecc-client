<template>
  <MainLayout>
    <Card title="accedi" class="text-black">
      <div class="flex flex-col">
        <label class="font-luckiest-guy">ROOM</label>
        <input
          class="input-primary"
          type="text"
          placeholder="room"
          v-model="form.room"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="font-luckiest-guy">USERNAME</label>
        <input
          class="input-primary"
          type="text"
          placeholder="username"
          v-model="form.username"
          required
        />
      </div>
      <button class="btn-primary" @click="startHosting" :disabled="loading">
        CREATE ROOM
      </button>
    </Card>
  </MainLayout>
</template>

<script>
import { ref, reactive } from "vue";
import { useSocket } from "../composables/socket";
import { useState } from "../composables/state";
import { useRouter } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Card from "../components/Card.vue";

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
  components: { MainLayout, Card },
};
</script>
