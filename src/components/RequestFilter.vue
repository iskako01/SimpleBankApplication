<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Search..." v-model="name" />
    </div>

    <div class="form-control">
      <select id="status" v-model="status">
        <option disabled selected>Select status</option>
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">Clear</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";

export default defineComponent({
  name: "AppStatus",
  props: ["modelValue"],
  emits: ["update:modelValue"],

  setup(_, { emit }) {
    const name = ref("");
    const status = ref<string | null>("");

    watch([name, status], (values) => {
      emit("update:modelValue", {
        name: values[0],
        status: values[1],
      });
    });

    const isActive = computed(() => name.value || status.value);

    const reset = () => {
      name.value = "";
      status.value = null;
    };

    return { name, status, isActive, reset };
  },
});
</script>
