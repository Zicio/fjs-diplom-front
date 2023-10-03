"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "@/utils/schemas/signInSchema";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import styles from "../auth.module.css";
import FormHint from "@/components/FormHint/FormHint";
import Loader from "@/components/Loader/Loader";
import { Roles } from "@/utils/getCurrentUserRole";
import Cookies from "js-cookie";

export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface ISignInResponse {
  email: string;
  name: string;
  contactPhone: string;
  role: Roles;
  accessToken: string;
}

const AuthSignInForm = () => {
  const router = useRouter();
  const methods = useForm<ISignInFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(signInSchema),
  });

  //  State ошибок запроса к серверу
  const [errorResponse, setErrorResponse] = useState<string>("");
  const [data, setData] = useState<ISignInResponse>();

  //   Методы react-hook-form
  const {
    handleSubmit,
    formState: { isValid },
    reset,
    clearErrors,
  } = methods;

  //  Очистка ошибок валидации форм при смене форм
  useEffect(() => {
    clearErrors();
  }, [clearErrors]);

  ///  Редирект на главную, если запрос успешен
  useEffect(() => {
    if (data) {
      reset();
      localStorage.user = JSON.stringify(data);
      Cookies.set("access_token", data.accessToken);
      router.refresh();
      router.push("/");
    }
  }, [data, reset, router]);

  const onSubmit = async (data: ISignInFormValues) => {
    setErrorResponse("");
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/api/auth/login",
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
      const newData = await res.json();
      setData(newData);
    } else {
      const errData = await res.json();
      setErrorResponse(errData.message);
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
          disabled={false}
        />
        <FormField
          type="text"
          text="Пароль пользователя"
          id="password"
          name="password"
          placeholder="Введите пароль*"
          disabled={false}
        />
        {false ? (
          <Loader />
        ) : (
          <Button type="submit" isActive={isValid} text="Войти" />
        )}
        {errorResponse && <FormHint text={errorResponse} />}
      </form>
    </FormProvider>
  );
};

export default AuthSignInForm;
