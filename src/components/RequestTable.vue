<template>
  <h4 v-if="!requests.length" class="text-center">
    There are no requests yet.
  </h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(request, index) in requests" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ request.name }}</td>
        <td>{{ request.phone }}</td>
        <td>{{ currency(request.amount) }}</td>
        <td><AppStatus :type="request.status" /></td>
        <td>
          <router-link
            v-slot="{ navigate }"
            custom
            :to="{ name: 'Requests', params: { id: request.id } }"
          >
            <button class="btn primary" @click="navigate">Open</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { currency } from "@/utils/currency";
import AppStatus from "@/components/AppStatus.vue";

export default defineComponent({
  components: { AppStatus },
  props: {
    requests: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { currency };
  },
});
</script>
