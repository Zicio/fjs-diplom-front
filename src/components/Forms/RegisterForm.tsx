import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "@/utils/schemas/registerSchema";
import styles from "./Form.module.scss";

type FormValues = {
  email: string;
  password: string;
  name: string;
  contactPhone: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
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
      <div>
        <label className={styles.form__label} htmlFor="name">
          Имя пользователя
        </label>
        <input
          {...register("name")}
          className={`${errors?.name ? "border-red-500" : "border-blue-200"} ${
            styles.form__input
          }`}
          type="text"
          id="name"
          name="name"
          placeholder="Введите имя*"
          required
        />
        {errors?.name && (
          <p className={styles.form_hint}>{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className={styles.form__label} htmlFor="contactPhone">
          Номер телефона пользователя
        </label>
        <input
          {...register("contactPhone")}
          className={`${
            errors?.contactPhone ? "border-red-500" : "border-blue-200"
          } ${styles.form__input}`}
          type="text"
          id="contactPhone"
          name="contactPhone"
          placeholder="Введите номер телефона*"
          required
        />
        {errors?.contactPhone && (
          <p className={styles.form_hint}>{errors.contactPhone.message}</p>
        )}
      </div>
      <button
        className={`${
          isValid ? "bg-blue-700 hover:bg-blue-500" : "bg-blue-700 opacity-50"
        } ${styles.form__button} `}
        type="submit"
        disabled={!isValid}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
