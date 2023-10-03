"use client";

import { AuthTypes } from "@/app/auth/layout";
import styles from "./auth.module.css";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const AuthRadioButton: FC<{ authTypeButton: AuthTypes }> = ({
  authTypeButton,
}) => {
  const [altTypeButton, setAltTypeButton] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    setAltTypeButton(
      authTypeButton === AuthTypes.signIn ? AuthTypes.signIn : AuthTypes.signUp,
    );
  }, [altTypeButton, authTypeButton]);
  return (
    <label htmlFor={authTypeButton}>
      <input
        className={styles.auth__input}
        type="radio"
        name="authType"
        id={authTypeButton}
        value={authTypeButton}
        checked={authTypeButton === pathname.slice(-6)}
        onChange={() => router.push(`/auth/${altTypeButton}`)}
      />
      <span className={styles.auth__customInput}></span>
      {authTypeButton === AuthTypes.signIn ? "Войти" : "Зарегистрироваться"}
    </label>
  );
};

export default AuthRadioButton;
