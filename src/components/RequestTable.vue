<template>
  <h4 v-if="!requests.length" class="text-center">
    There are no requests yet.
  </h4>
  <table v-else class="card">
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
    <tbody v-for="(request, index) in requests" :key="index">
      <tr>
        <td>{{ index + 1 }}</td>
        <td>{{ request.name }}</td>
        <td>{{ request.phone }}</td>
        <td>{{ request.amount }}</td>
        <td>{{ request.status }}</td>
        <td>{{}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    requests: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
