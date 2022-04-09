<template>
  <div class="container">
    <AppMessages />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMessages from "@/components/AppMessages.vue";

export default defineComponent({
  components: { AppMessages },
  setup() {
    return {};
  },
});
</script>

<style></style>
