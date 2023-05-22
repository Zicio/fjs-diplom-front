"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "@/utils/schemas/registerSchema";
import styles from "./Form.module.scss";
import { useState } from "react";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import { authRequest } from "@/components/Forms/authForms-Api";

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
    reValidateMode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await authRequest(data, "register");
      if (response?.ok) {
        const json: RegisterResponse = await response.json();
        localStorage.user = JSON.stringify(json);
        console.log(json);
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

export default RegisterForm;
