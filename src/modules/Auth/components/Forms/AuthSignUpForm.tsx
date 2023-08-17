"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthTypes } from "@/modules/Auth/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpSchema from "@/utils/schemas/signUpSchema";
import styles from "../../Auth.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import FormHint from "@/components/FormHint/FormHint";
import { INestException } from "@/interfaces/INestException";
import { useSignUpMutation } from "@/redux/services/authApi";
import Loader from "@/components/Loader/Loader";

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
  const methods = useForm<ISignUpFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(signUpSchema),
  });

  //  Context типа формы Auth
  const { authType, setAuthType } = useContext(AuthContext);
  //  State ошибок запроса к серверу
  const [errorResponse, setErrorResponse] = useState<string>("");
  // RTK Query
  const [signUp, { isLoading, isSuccess, error }] = useSignUpMutation();

  //  Метода для отправки запроса к серверу
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

  //  Редирект на форму SignIn, если запрос успешен
  useEffect(() => {
    if (isSuccess) {
      reset();
      setAuthType(AuthTypes.signIn);
    }
  }, [isSuccess, reset, setAuthType]);

  if (authType !== "signUp") return null;

  const onSubmit = async (data: ISignUpFormValues) => {
    setErrorResponse("");
    await signUp(data);
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
        {isLoading ? (
          <Loader />
        ) : (
          <Button type="submit" isActive={isValid} text="Зарегистрироваться" />
        )}
        {!!errorResponse && <FormHint text={errorResponse} />}
        {isSuccess && <FormHint text="Успешно" />}
      </form>
    </FormProvider>
  );
};

export default AuthSignUpForm;
