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
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    requests: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
