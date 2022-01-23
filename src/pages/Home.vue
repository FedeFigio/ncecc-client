<template>
  <div>
    <h1>HOME</h1>
    <router-link to="/host">
      <button class="rounded bg-blue-500 text-white p-4 font-luckiest-guy">OSPITA</button>
    </router-link>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    function goToHost() {
      router.push("/host");
    }

    return { goToHost };
  },
};
</script>