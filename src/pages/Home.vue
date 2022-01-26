<template>
  <MainLayout>
    <template #title>
      <h1>HOME</h1>
    </template>
    <router-link to="/host">
      <button>OSPITA</button>
    </router-link>
    <router-link to="/join">
      <button>UNISCITI</button>
    </router-link>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
export default {
  components: {
    MainLayout,
  },

  props: {
    titolo: {
      type: String,
      dafault: "",
    },
  },

  emits: [""],

  setup() {
    // router
    const router = useRouter();

    function goToHost() {
      router.push("/host");
    }

    // test
    function testCliccone(data) {
      console.log(data);
    }

    const count = ref(0);
    const count2 = ref(0);

    return { goToHost, testCliccone, count, count2 };
  },
};
</script>
