<template>
  <AppPage back title="Help">
    <QuestionItem
      v-for="question in questions"
      :key="question.title"
      :questions="question"
    ></QuestionItem>
  </AppPage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppPage from "@/components/AppPage.vue";
import QuestionItem from "@/components/QuestionItem.vue";
import Iquestions from "@/types/questions/questions";

export default defineComponent({
  name: "Help",
  components: { AppPage, QuestionItem },
  setup() {
    const questions: Iquestions[] = [
      {
        title: "What is in this system ?",
        text: "There is everything to see what requests a person has added ",
      },
      {
        title: "How does authorization work here? ",
        text: "All implamented through Firebase ",
      },
    ];

    return { questions };
  },
});
</script>
