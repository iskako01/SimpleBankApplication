<template>
  <Loading v-if="loading" />
  <AppPage v-else title="List of requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <RequestFilter v-model="filter" />
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
import RequestFilter from "@/components/RequestFilter.vue";
import Loading from "@/components/Loading.vue";
import AppModal from "@/components/AppModal.vue";
import IrequestFormData from "@/types/request/requestData";

export default defineComponent({
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal,
    Loading,
    RequestFilter,
  },
  setup() {
    const modal = ref(false);
    const loading = ref(false);
    const store = useStore();
    const filter = ref({ name: "", status: "" });

    const requests = computed(() =>
      store.getters.requests
        .filter((request: IrequestFormData) => {
          if (filter.value.name) {
            return request.name.includes(filter.value.name);
          }
          return request;
        })
        .filter((request: IrequestFormData) => {
          if (filter.value.status) {
            return filter.value.status === request.status;
          }
          return request;
        })
    );

    const close = () => {
      modal.value = false;
    };

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("load");
      loading.value = false;
    });

    return { requests, modal, close, loading, filter };
  },
});
</script>
