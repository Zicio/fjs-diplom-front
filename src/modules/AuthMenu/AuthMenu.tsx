"use client";

import { useState } from "react";
import SignInForm from "@/components/Forms/signIn/SignInForm";
import SignUpForm from "@/components/Forms/signUp/SignUpForm";
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
      {typeOfForm === "login" ? <SignInForm /> : <SignUpForm />}
    </section>
  );
};

export default AuthMenu;
