"use client";

import { useContext, useState } from "react";
import { AuthContext, AuthTypes } from "@/modules/Auth/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpSchema from "@/utils/schemas/signUpSchema";
import styles from "../../Auth.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import FormHint from "@/components/FormHint/FormHint";
import signUpRequest from "@/modules/Auth/components/Forms/signUp-Api";
import { INestException } from "@/interfaces/INestException";

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
  const { authType, setAuthType } = useContext(AuthContext);
  const methods = useForm<ISignUpFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(signUpSchema),
  });
  const [errorResponse, setErrorResponse] = useState<string>("");

  if (authType !== "signUp") return null;

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = async (data: ISignUpFormValues) => {
    try {
      setErrorResponse("");
      const res = await signUpRequest(data);
      if (res.ok) {
        reset();
        setAuthType(AuthTypes.signIn);
      } else {
        const nestExceptionString = await res.text();
        const nestException: INestException = await JSON.parse(
          nestExceptionString,
        );
        setErrorResponse(nestException.message);
      }
    } catch (e) {
      setErrorResponse((e as Error).message);
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
        <Button type="submit" isActive={isValid} text="Войти" />
        {!!errorResponse && <FormHint text={errorResponse} />}
      </form>
    </FormProvider>
  );
};

export default AuthSignUpForm;
