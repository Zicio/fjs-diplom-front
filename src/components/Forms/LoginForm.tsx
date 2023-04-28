import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/utils/schemas/loginSchema";
import styles from "./Form.module.scss";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label className={styles.form__label} htmlFor="email">
          Электронная почта пользователя
        </label>
        <input
          {...register("email")}
          className={`${errors?.email ? "border-red-500" : "border-blue-200"} ${
            styles.form__input
          }`}
          type="text"
          id="email"
          name="email"
          placeholder="Введите электронную почту*"
          required
        />
        {errors?.email && (
          <p className={styles.form_hint}>{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className={styles.form__label} htmlFor="password">
          Пароль пользователя
        </label>
        <input
          {...register("password")}
          className={`${
            errors?.password ? "border-red-500" : "border-blue-200"
          } ${styles.form__input}`}
          type="text"
          id="password"
          name="password"
          placeholder="Введите пароль*"
          required
        />
        {errors?.password && (
          <p className={styles.form_hint}>{errors.password.message}</p>
        )}
      </div>
      <button
        className={`${
          isValid ? "bg-blue-700 hover:bg-blue-500" : "bg-blue-700 opacity-50"
        } ${styles.form__button} `}
        type="submit"
        disabled={!isValid}
      >
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
