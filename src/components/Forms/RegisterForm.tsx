"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "@/utils/schemas/registerSchema";
import styles from "./Form.module.scss";
import { useState } from "react";
import FormField from "@/components/FormField/FormField";

type FormValues = {
  email: string;
  password: string;
  name: string;
  contactPhone: string;
};

type RegisterResponse = {
  id: string;
  email: string;
  name: string;
};

const RegisterForm = () => {
  const methods = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch(
        process.env.BACKEND_URL + "/api/auth/register",
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
        const json: RegisterResponse = await response.json();
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
        <button
          className={`${
            isValid ? "bg-blue-700 hover:bg-blue-500" : "bg-blue-700 opacity-50"
          } ${styles.form__button} `}
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        {errorResponse && <p className={styles.form_hint}>errorResponse</p>}
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
