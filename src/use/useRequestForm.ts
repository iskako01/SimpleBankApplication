import { useForm, useField } from "vee-validate";
import * as yup from "yup";

export function useRequestForm(submit: any) {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: "active",
    },
  });

  const {
    value: name,
    errorMessage: nError,
    handleBlur: nBlur,
  } = useField("name", yup.string().trim().required());

  const {
    value: phone,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField("phone", yup.string().trim().required());

  const {
    value: amount,
    errorMessage: aError,
    handleBlur: aBlur,
  } = useField(
    "amount",
    yup.number().required().min(0, "The amount can't be less then 0")
  );

  const { value: status } = useField("status");

  const requestFormSubmit = handleSubmit(submit);
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
}
