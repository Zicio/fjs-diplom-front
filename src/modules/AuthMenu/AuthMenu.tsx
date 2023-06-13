"use client";

import { useState } from "react";
import LoginForm from "@/components/Forms/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm";
import styles from "./AuthMenu.module.css";

export type TypeOfForm = "login" | "register";

const AuthMenu = () => {
  const [typeOfForm, setTypeOfForm] = useState<TypeOfForm>("login");

  return (
    <section className={styles.authMenu}>
      <span>
        <button
          className={styles.authMenu__button}
          type="button"
          onClick={() => setTypeOfForm("login")}
        >
          Войти
        </button>{" "}
        или{" "}
        <button
          className={styles.authMenu__button}
          type="button"
          onClick={() => setTypeOfForm("register")}
        >
          Зарегистрироваться
        </button>
      </span>
      {typeOfForm === "login" ? <LoginForm /> : <RegisterForm />}
    </section>
  );
};

export default AuthMenu;
