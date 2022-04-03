<template>
  <div class="container">
    <!-- <router-view /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Auth from "@/views/Auth.vue";
export default defineComponent({
  component: { Auth },
  setup() {
    return {};
  },
});
</script>

<style></style>
