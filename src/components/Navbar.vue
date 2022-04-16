<template>
  <nav class="navbar">
    <router-link :to="{ name: 'Home' }">Online Bank</router-link>
    <ul class="navbar-menu">
      <li>
        <router-link :to="{ name: 'Home' }">Requests</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Help' }">Help</router-link>
      </li>
      <li>
        <a @click.prevent="openSidebar" href="#">Messages</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const openSidebar = () => {
      store.commit("openSidebar");
    };

    const logout = () => {
      store.commit("logout");
      router.push({ name: "Auth" });
    };
    return { logout, openSidebar };
  },
});
</script>

<style></style>
