<template>
  <Navbar />
  <Sidebar />

  <div class="container with-nav">
    <AppMessages />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import AppMessages from "@/components/AppMessages.vue";

export default defineComponent({
  components: { Navbar, AppMessages, Sidebar },
  setup() {
    return {};
  },
});
</script>

<style></style>
