"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/modules/Auth/Auth";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "@/utils/schemas/signInSchema";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import styles from "../../Auth.module.scss";
import FormHint from "@/components/FormHint/FormHint";
import { useSignInMutation } from "@/redux/services/authApi";
import { INestException } from "@/interfaces/INestException";
import Loader from "@/components/Loader/Loader";

export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface ISignInResponse {
  email: string;
  name: string;
  contactPhone: string;
}

const AuthSignInForm = () => {
  const router = useRouter();
  const methods = useForm<ISignInFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(signInSchema),
  });

  //  Context типа формы Auth
  const { authType } = useContext(AuthContext);
  //  State ошибок запроса к серверу
  const [errorResponse, setErrorResponse] = useState<string>("");
  //  RTK Query
  const [signIn, { isSuccess, isLoading, error, data }] = useSignInMutation();

  //   Методы react-hook-form
  const {
    handleSubmit,
    formState: { isValid },
    reset,
    clearErrors,
  } = methods;

  //  Обработка появления плашки с ошибкой запроса к серверу
  useEffect(() => {
    if (error) {
      if ("data" in error) {
        const errData = "error" in error ? error.error : error.data;
        setErrorResponse((errData as INestException).message);
      } else {
        setErrorResponse("Неизвестная ошибка, попробуйте позже");
      }
    }
  }, [error]);

  //  Очистка ошибок валидации форм при смене форм
  useEffect(() => {
    clearErrors();
  }, [authType, clearErrors]);

  ///  Редирект на главную, если запрос успешен
  useEffect(() => {
    if (isSuccess) {
      reset();
      localStorage.user = JSON.stringify(data);
      router.push("/");
    }
  }, [data, isSuccess, reset, router]);

  if (authType !== "signIn") return null;

  const onSubmit = async (data: ISignInFormValues) => {
    setErrorResponse("");
    await signIn(data).unwrap();
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
          disabled={isLoading}
        />
        <FormField
          type="text"
          text="Пароль пользователя"
          id="password"
          name="password"
          placeholder="Введите пароль*"
          disabled={isLoading}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <Button type="submit" isActive={isValid} text="Войти" />
        )}
        {errorResponse && <FormHint text={errorResponse} />}
        {isSuccess && <FormHint text="Успешно" />}
      </form>
    </FormProvider>
  );
};

export default AuthSignInForm;
