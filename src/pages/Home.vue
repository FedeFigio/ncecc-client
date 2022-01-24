<template>
  <MainLayout>
    <template #title>
      <h1>HOME</h1>
    </template>
    <router-link to="/host">
      <button class="p-4 text-white bg-blue-500 rounded font-luckiest-guy">
        OSPITA
      </button>
    </router-link>
    <my-button @cliccone="testCliccone" v-model="count" v-model:pino="count2"
      >MIO BOTTONE</my-button
    >
    <h1>count: {{ count }}</h1>
    <h1>count pino: {{ count2 }}</h1>

    <div>
      <span class="font-bold">STANZOTTA</span>
      <span class="text-sm italic">#01234</span>
    </div>

    <div>
      <span class="font-bold">STANZOTTA</span>
      <span class="text-sm italic">#23234</span>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue";
import { useRouter } from "vue-router";
import MyButton from "../components/Button.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    MainLayout,
    MyButton,
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
