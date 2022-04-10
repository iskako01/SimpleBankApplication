<template>
  <form @submit.prevent="requestFormSubmit">
    <div class="form-control" :class="{ invalid: nError }">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" @blur="nBlur" />
      <small v-if="nError">{{ nError }}</small>
    </div>

    <div class="form-control" :class="{ invalid: pError }">
      <label for="phone">Phone</label>
      <input type="text" id="phone" v-model="phone" @blur="pBlur" />
      <small v-if="pError">{{ pError }}</small>
    </div>

    <div class="form-control" :class="{ invalid: aError }">
      <label for="cost">Amount</label>
      <input type="text" id="cost" v-model="amount" @blur="aBlur" />
      <small v-if="aError">{{ aError }}</small>
    </div>

    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting">Create</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IrequestFormData from "@/types/request/requestData";
import { useRequestForm } from "@/use/useRequestForm";

export default defineComponent({
  name: "RequestModal",
  emits: ["created"],
  setup(_, { emit }) {
    const submit = async (values: IrequestFormData): Promise<void> => {
      console.log(values);
      emit("created");
    };

    const {
      status,
      isSubmitting,
      requestFormSubmit,
      name,
      nBlur,
      nError,
      phone,
      pBlur,
      pError,
      amount,
      aBlur,
      aError,
    } = useRequestForm(submit);

    return {
      status,
      isSubmitting,
      requestFormSubmit,
      name,
      nBlur,
      nError,
      phone,
      pBlur,
      pError,
      amount,
      aBlur,
      aError,
    };
  },
});
</script>

<style></style>
