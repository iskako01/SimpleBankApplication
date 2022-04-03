<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Log in to the system</h1>

    <div :class="['form-control', { invalid: eError }]">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur" />
      <small v-if="eError">{{ eError }}</small>
    </div>

    <div :class="['form-control', { invalid: pError }]">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="pBlur" />
      <small v-if="pError">{{ pError }}</small>
    </div>

    <button class="btn primary">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const { handleSubmit } = useForm();

    const {
      value: email,
      errorMessage: eError,
      handleBlur: eBlur,
    } = useField(
      "email",
      yup
        .string()
        .trim()
        .required("Please enter email")
        .email("You must enter the correct email")
    );
    const {
      value: password,
      errorMessage: pError,
      handleBlur: pBlur,
    } = useField(
      "password",
      yup.string().trim().required("Please enter password").min(6)
    );
    const onSubmit = handleSubmit((values) => {
      console.log("form", values);
    });
    // const login = async () => {
    //   if (email.value != "" && password.value != "") {
    //     await store
    //       .dispatch("login", {
    //         email: email.value,
    //         password: password.value,
    //       })
    //       .then(() => {
    //         router.push({ name: "/" });
    //       });
    //   }
    // };

    return {
      email,
      eError,
      password,
      pError,
      eBlur,
      pBlur,
      onSubmit,
    };
  },
});
</script>

<style></style>
