"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "@/utils/schemas/registerSchema";
import styles from "../Form.module.css";
import { useState } from "react";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import signUpRequest from "@/components/Forms/signUp/signUp-Api";

export interface ISignUpFormValues {
  email: string;
  password: string;
  name: string;
  contactPhone: string;
}

export interface ISignUpResponse {
  id: string;
  email: string;
  name: string;
}

const SignUpForm = () => {
  const methods = useForm<ISignUpFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const onSubmit = async (data: ISignUpFormValues) => {
    try {
      const response = await signUpRequest(data);
      if (response?.ok) {
        const json: ISignUpResponse = await response.json();
        console.log(json);
      }
    } catch (e) {
      setErrorResponse((e as Error).message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormField
          type="string"
          text="Электронная почта пользователя"
          id="email"
          name="email"
          placeholder="Введите электронную почту*"
        />
        <FormField
          type="text"
          text="Пароль пользователя"
          id="password"
          name="password"
          placeholder="Введите пароль*"
        />
        <FormField
          type="text"
          text="Имя пользователя"
          id="name"
          name="name"
          placeholder="Введите имя*"
        />
        <FormField
          type="text"
          text="Номер телефона пользователя"
          id="contactPhone"
          name="contactPhone"
          placeholder="Введите номер телефона*"
        />
        <Button type="submit" isActive={isValid} text="Войти" />
        {errorResponse && <p className={styles.form_hint}>errorResponse</p>}
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
