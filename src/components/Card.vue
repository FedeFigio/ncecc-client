<template>
  <div class="bg-white rounded-2xl">
    <div
      class="bg-dark/75 text-center py-3 text-3xl font-luckiest-guy text-white"
    >
      {{ title }}
    </div>
    <div class="flex flex-col items-center space-y-4 py-4 px-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>