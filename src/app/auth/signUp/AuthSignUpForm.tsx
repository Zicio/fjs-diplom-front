"use client";

import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpSchema from "@/utils/schemas/signUpSchema";
import styles from "../auth.module.css";
import { FormProvider, useForm } from "react-hook-form";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import FormHint from "@/components/FormHint/FormHint";
import { INestException } from "@/interfaces/INestException";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";

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

const AuthSignUpForm = () => {
  const router = useRouter();

  const methods = useForm<ISignUpFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(signUpSchema),
  });

  //  State ошибок запроса к серверу
  const [errorResponse, setErrorResponse] = useState<string>("");

  const {
    handleSubmit,
    formState: { isValid },
    reset,
    clearErrors,
  } = methods;

  //  Обработка появления плашки с ошибкой запроса к серверу
  // useEffect(() => {
  //   if (error) {
  //     if ("data" in error) {
  //       const errData = "error" in error ? error.error : error.data;
  //       setErrorResponse((errData as INestException).message);
  //     } else {
  //       setErrorResponse("Неизвестная ошибка, попробуйте позже");
  //     }
  //   }
  // }, [error]);

  //  Очистка ошибок валидации форм при смене форм
  useEffect(() => {
    clearErrors();
  }, [clearErrors]);

  const onSubmit = async (data: ISignUpFormValues) => {
    setErrorResponse("");
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/api/client/register",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (res.ok) {
      router.push("/auth/signIn");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.auth__form}
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
        {false ? (
          <Loader />
        ) : (
          <Button type="submit" isActive={isValid} text="Зарегистрироваться" />
        )}
        {!!errorResponse && <FormHint text={errorResponse} />}
      </form>
    </FormProvider>
  );
};

export default AuthSignUpForm;
