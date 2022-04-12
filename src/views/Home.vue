<template>
  <Loading v-if="loading" />
  <AppPage v-else title="List of requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <RequestTable :requests="requests" />

    <teleport to="body">
      <AppModal v-if="modal" title="Create the request" @close="close">
        <RequestModal @created="modal = false" />
      </AppModal>
    </teleport>
  </AppPage>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import AppPage from "@/components/AppPage.vue";
import RequestTable from "@/components/RequestTable.vue";
import RequestModal from "@/components/RequestModal.vue";
import Loading from "@/components/Loading.vue";
import AppModal from "@/components/AppModal.vue";

export default defineComponent({
  components: { AppPage, RequestTable, AppModal, RequestModal, Loading },
  setup() {
    const modal = ref(false);
    const loading = ref(false);
    const store = useStore();

    const requests = computed(() => {
      return store.getters.requests;
    });
    console.log(requests.value);

    const close = () => {
      modal.value = false;
    };

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("load");
      loading.value = false;
    });

    return { requests, modal, close, loading };
  },
});
</script>
