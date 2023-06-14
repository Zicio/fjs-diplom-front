"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/utils/schemas/loginSchema";
import styles from "../Form.module.css";
import { useState } from "react";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import signInRequest from "@/components/Forms/signIn/signIn-Api";

export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface ISignInResponse {
  email: string;
  name: string;
  contactPhone: string;
}

const SignInForm = () => {
  const methods = useForm<ISignInFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const onSubmit = async (data: ISignInFormValues) => {
    try {
      const response = await signInRequest(data);
      const json: ISignInResponse = await response.json();
      console.log(json);
      localStorage.user = json;
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
          type="text"
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
        <Button type="submit" isActive={isValid} text="Войти" />
        {errorResponse && <p className={styles.form_hint}>errorResponse</p>}
      </form>
    </FormProvider>
  );
};

export default SignInForm;
