<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

import MainLayout from "@/layout/MainLayout.vue";
import AuthLayout from "@/layout/AuthLayout.vue";

export default defineComponent({
  components: { MainLayout, AuthLayout },

  setup() {
    const route = useRoute();

    const layout = computed(() => route.meta.layout);

    console.log(layout);

    return { layout };
  },
});
</script>

<style lang="scss"></style>
