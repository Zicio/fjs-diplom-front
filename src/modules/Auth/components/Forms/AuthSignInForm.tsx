"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/modules/Auth/Auth";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "@/utils/schemas/signInSchema";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import styles from "../../Auth.module.scss";
import FormHint from "@/components/FormHint/FormHint";
import signInRequest from "@/modules/Auth/components/Forms/signIn-Api";
import { INestException } from "@/interfaces/INestException";

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
  const { authType } = useContext(AuthContext);
  const methods = useForm<ISignInFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(signInSchema),
  });
  const [errorResponse, setErrorResponse] = useState<string>("");

  if (authType !== "signIn") return null;

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = async (data: ISignInFormValues) => {
    try {
      setErrorResponse("");
      const res = await signInRequest(data); // TODO: нужно ли исползовать data с backend?
      if (res.ok) {
        reset();
        router.push("/");
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
        <Button type="submit" isActive={isValid} text="Войти" />
        {!!errorResponse && <FormHint text={errorResponse} />}
      </form>
    </FormProvider>
  );
};

export default AuthSignInForm;
