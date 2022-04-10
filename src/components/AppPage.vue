<template>
  <div class="card">
    <h1 class="card-title">
      {{ title }}
      <slot name="header"></slot>
    </h1>

    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    document.title = `${props.title} | Online Bank`;
    return {};
  },
});
</script>
