<template>
  <div class="bg-dark">
    <Header class="fixed top-0 w-full px-4 py-2" />
    <main
      class="
        text-white
        px-5
        py-12
        h-screen
        w-screen
        flex flex-col
        justify-center
        max-w-3xl
        mx-auto
      "
    >
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default { components: { Header } };
</script>

