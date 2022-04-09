<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title">{{ useTitle }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

interface Imessage {
  value?: string;
  type?: string;
}

export default defineComponent({
  name: "AppMessage",
  setup() {
    const store = useStore();

    const title = {
      primary: "Success!",
      danger: "Error!",
      warning: "Warning!",
    };

    const useTitle = computed(() => {
      return title[message.value.type as keyof typeof title];
    });

    const message = computed<Imessage>(() => {
      return store.state.message;
    });

    const close = () => {
      store.commit("clearMessage");
    };

    return { message, useTitle, close };
  },
});
</script>

<style></style>
