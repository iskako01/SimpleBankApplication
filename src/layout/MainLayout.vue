<template>
  <Navbar />
  <div class="container with-nav">
    <div class="card"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: { Navbar },
  setup() {
    return {};
  },
});
</script>

<style></style>
