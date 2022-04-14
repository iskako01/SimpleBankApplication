<template>
  <div class="breadcrumbs" v-if="back">
    <router-link class="btn" :to="{ name: 'Home' }">Back</router-link>
  </div>
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
    back: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  setup(props) {
    document.title = `${props.title} | Online Bank`;
    return {};
  },
});
</script>
