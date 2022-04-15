<template>
  <Loading v-if="loading" />
  <AppPage :back="true" v-else-if="request" title="Request">
    <p><strong>Name:</strong>{{ request.name }}</p>
    <p><strong>Phone:</strong>{{ request.phone }}</p>
    <p><strong>Amount:</strong>{{ currency(request.amount) }}</p>
    <p><strong>Status:</strong><AppStatus :type="request.status" /></p>

    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Delete</button>
    <button class="btn" v-if="hasChanged" @click="update">update</button>
  </AppPage>
  <h3 v-else class="text-center text-white">
    The request with ID: {{ id }} is not
  </h3>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
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
    const router = useRouter();
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
    const status = ref("");

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("loadByID", id);
      status.value = request.value?.status;
      loading.value = false;
    });

    const hasChanged = computed(() => request.value.status !== status.value);

    const remove = async () => {
      await store.dispatch("remove", id);
      router.push({ name: "Home" });
    };
    const update = async () => {
      await store.dispatch("update", {
        ...request.value,
        status: status.value,
        id,
      });
      router.push({ name: "Home" });
    };

    return {
      loading,
      request,
      id,
      currency,
      remove,
      update,
      status,
      hasChanged,
    };
  },
});
</script>
