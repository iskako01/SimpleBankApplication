<template>
  <nav class="navbar">
    <router-link :to="{ name: 'Home' }">Online Bank</router-link>
    <ul class="navbar-menu">
      <li>
        <router-link :to="{ name: 'Requests' }">Requests</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Help' }">Help</router-link>
      </li>
      <li>
        <a href="#">Messages</a>
      </li>
      <li>
        <a href="#">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style></style>
