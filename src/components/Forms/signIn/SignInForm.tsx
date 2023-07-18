"use client";

import styles from "../Form.module.scss";
import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/utils/schemas/loginSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface ISignInResponse {
  email: string;
  name: string;
  contactPhone: string;
}

const SignInForm = () => {
  const router = useRouter();

  const methods = useForm<ISignInFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  // const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const onSubmit = async (data: ISignInFormValues) => {
    const res = await signIn("credentials", {
      redirect: false,
      ...data,
    });

    if (res && !res.error) {
      router.push("/");
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
        {/*{errorResponse && <p className={styles.form_hint}>errorResponse</p>}*/}
      </form>
    </FormProvider>
  );
};

export default SignInForm;
