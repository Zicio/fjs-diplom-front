"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/utils/schemas/loginSchema";
import styles from "./Form.module.css";
import { useState } from "react";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import { authRequest } from "@/components/Forms/authForms-Api";

export interface FormValues {
  email: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  name: string;
  contactPhone: string;
}

const LoginForm = () => {
  const methods = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await authRequest(data, "login");
      if (response?.ok) {
        const json: LoginResponse = await response.json();
      } else {
        const message = await response?.text();
        throw new Error(message);
      }
    } catch (e) {
      if (e instanceof Error) {
        setErrorResponse(e.message);
      }
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

export default LoginForm;
