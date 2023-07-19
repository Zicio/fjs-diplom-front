"use client";

import { useContext } from "react";
import { AuthContext, AuthTypes } from "@/modules/Auth/Auth";
import styles from "../Auth.module.scss";

const AuthTitle = () => {
  const { setAuthType } = useContext(AuthContext);
  return (
    <h1 className={styles.auth__title}>
      <button
        className={styles.auth__typeButton}
        onClick={() => setAuthType(AuthTypes.signIn)}
      >
        Войти
      </button>
      {" или "}
      <button
        className={styles.auth__typeButton}
        onClick={() => setAuthType(AuthTypes.signUp)}
      >
        Зарегистрироваться
      </button>
    </h1>
  );
};

export default AuthTitle;
