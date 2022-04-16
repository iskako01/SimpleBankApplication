<template>
  <div class="question" @click="isOpen = !isOpen">
    <div class="question-title">{{ questions.title }}</div>
    <div class="question-body" v-if="isOpen">{{ questions.text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "QuestionItem",
  props: {
    questions: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
});
</script>
