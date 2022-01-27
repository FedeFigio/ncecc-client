<template>
  <MainLayout>
    <Card title="accedi">
      <div class="flex flex-col h-full space-y-4">
        <router-link to="/host" class="btn-primary text-center" tag="button">
          OSPITA
        </router-link>
        <router-link to="/join" class="btn-primary text-center" tag="button">
          UNISCITI
        </router-link>
      </div>
    </Card>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import Card from "../components/Card.vue";
export default {
  components: {
    MainLayout,
    Card,
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
