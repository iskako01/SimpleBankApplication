<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3 v-if="title">{{ title }}</h3>

    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "AppModal",
  emits: ["close"],
  props: {
    title: {
      type: String as PropType<string>,
    },
  },
});
</script>
