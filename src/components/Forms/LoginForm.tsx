"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/utils/schemas/loginSchema";
import styles from "./Form.module.scss";
import { useState } from "react";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";

type FormValues = {
  email: string;
  password: string;
};

type LoginResponse = {
  email: string;
  name: string;
  contactPhone: string;
};

const LoginForm = () => {
  const methods = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch(
        process.env.BACKEND_URL + "/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (response.status === 401) {
        throw new Error(
          "Пользователь с таким email не найден / неверный пароль",
        );
      }
      if (response.ok) {
        const json: LoginResponse = await response.json();
        console.log(json); // TODO обработать успешный ответ от сервера
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setErrorResponse(e.message);
        return;
      }
      console.error("Unknown error:", e);
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
        <Button type="submit" isValid={isValid} text="Войти" />
        {errorResponse && <p className={styles.form_hint}>errorResponse</p>}
      </form>
    </FormProvider>
  );
};

export default LoginForm;
