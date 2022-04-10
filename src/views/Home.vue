<template>
  <AppPage title="List of requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <RequestTable :requests="requests" />

    <teleport to="body">
      <AppModal v-if="modal" title="Create the request" @close="close">
        <RequestModal />
      </AppModal>
    </teleport>
  </AppPage>
  <h1>sadasdasd</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppPage from "@/components/AppPage.vue";
import RequestTable from "@/components/RequestTable.vue";
import RequestModal from "@/components/RequestModal.vue";
import AppModal from "@/components/AppModal.vue";

export default defineComponent({
  components: { AppPage, RequestTable, AppModal, RequestModal },
  setup() {
    const requests = ref([]);
    const modal = ref(false);

    const close = () => {
      modal.value = false;
    };

    return { requests, modal, close };
  },
});
</script>
