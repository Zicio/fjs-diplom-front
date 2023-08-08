"use client";

import { useContext, useEffect, useId } from "react";
import { AuthContext, AuthTypes } from "@/modules/Auth/Auth";
import styles from "../Auth.module.scss";

const AuthTitle = () => {
  const toBeSelectedId = useId();
  const { authType, setAuthType } = useContext(AuthContext);

  //  Костыль для отображения первоначального положения радио кнопок. В Next JS with App Router c этим пока проблема https://github.com/vercel/next.js/issues/49499
  useEffect(() => {
    const checkedInput: HTMLInputElement | null = document.querySelector(
      `[data-id="${toBeSelectedId}"]`,
    );
    if (checkedInput) {
      checkedInput.checked = true;
    }
  }, [toBeSelectedId]);

  return (
    <h1 className={styles.auth__title}>
      <label htmlFor="signIn">
        <input
          className={styles.auth__input}
          type="radio"
          name="authType"
          id="signIn"
          value={AuthTypes.signIn}
          checked={authType === AuthTypes.signIn}
          onChange={(event) => setAuthType(event.target.value as AuthTypes)}
          data-id={toBeSelectedId}
        />
        <span className={styles.auth__customInput}></span>
        Войти
      </label>
      {" или "}

      <label htmlFor="signUp">
        <input
          className={styles.auth__input}
          type="radio"
          name="authType"
          id="signUp"
          value={AuthTypes.signUp}
          checked={authType === AuthTypes.signUp}
          onChange={(event) => setAuthType(event.target.value as AuthTypes)}
        />
        <span className={styles.auth__customInput}></span>
        Зарегистрироваться
      </label>
    </h1>
  );
};

export default AuthTitle;
