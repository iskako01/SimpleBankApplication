<template>
  <Loading v-if="loading" />
  <AppPage :back="true" v-else-if="request" title="Request">
    <p><strong>Name:</strong>{{ request.name }}</p>
    <p><strong>Phone:</strong>{{ request.phone }}</p>
    <p><strong>Amount:</strong>{{ currency(request.amount) }}</p>
    <p><strong>Status:</strong><AppStatus :type="request.status" /></p>
  </AppPage>
  <h3 v-else class="text-center text-white">
    The request with ID: {{ id }} is not
  </h3>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { currency } from "@/utils/currency";
import IrequestFormData from "@/types/request/requestData";

import AppPage from "@/components/AppPage.vue";
import AppStatus from "@/components/AppStatus.vue";
import Loading from "@/components/Loading.vue";

export default defineComponent({
  name: "Request",
  components: { AppPage, Loading, AppStatus },
  setup() {
    const route = useRoute();
    const store = useStore();
    const loading = ref(false);
    const id = route.params.id;
    const request = ref<IrequestFormData>({
      name: "",
      phone: "",
      amount: "",
      status: "",
      id: "",
    });

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("loadByID", id);
      loading.value = false;
    });

    return { loading, request, id, currency };
  },
});
</script>
