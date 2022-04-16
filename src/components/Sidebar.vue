<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="closeSidebar">&times;</span>

    <div class="sidebar-content">
      <p>
        Welcome to the application accounting system at our bank.You will find
        complete information about the system and requests here.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const sidebar = computed(() => store.state.sidebar);

    const closeSidebar = () => {
      store.commit("closeSidebar");
    };

    return { closeSidebar, sidebar };
  },
});
</script>
