<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";

export default defineComponent({
  name: "AppStatus",
  props: {
    type: {
      type: String as PropType<string>,
      required: true,
    },
  },

  setup(props) {
    const classesMap = {
      active: "primary",
      cancelled: "danger",
      done: "primary",
      panding: "warning",
    };
    const textMap = {
      active: "Active",
      cancelled: "Cancelled",
      done: "Done",
      panding: "Warning",
    };

    const className = ref(classesMap[props.type as keyof typeof classesMap]);
    const text = ref(textMap[props.type as keyof typeof textMap]);

    return { className, text };
  },
});
</script>
