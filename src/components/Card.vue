<template>
  <div class="bg-white rounded-2xl relative">
    <div
      class="
        bg-dark/75
        text-center
        h-12
        text-3xl
        font-luckiest-guy
        text-white
        absolute
        w-full
        flex
        items-center
        justify-center
      "
    >
      {{ title }}
    </div>
    <div class="flex flex-col items-center space-y-4 pt-16 pb-4 px-4 h-full">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>