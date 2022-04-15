<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from "vue";

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
      pending: "warning",
    };
    const textMap = {
      active: "Active",
      cancelled: "Cancelled",
      done: "Done",
      pending: "Warning",
    };

    const className = ref(classesMap[props.type as keyof typeof classesMap]);
    const text = ref(textMap[props.type as keyof typeof textMap]);

    watch(props, (val) => {
      className.value = classesMap[val.type as keyof typeof classesMap];
      text.value = textMap[val.type as keyof typeof textMap];
    });

    return { className, text };
  },
});
</script>
