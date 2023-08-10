"use client";

import { useEffect, useId } from "react";
import { AuthTypes } from "@/modules/Auth/Auth";
import styles from "../Auth.module.scss";
import AuthRadioButton from "@/modules/Auth/components/AuthRadioButton";

const AuthTitle = () => {
  const toBeSelectedId = useId();

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
      <AuthRadioButton
        authTypeButton={AuthTypes.signIn}
        dataId={toBeSelectedId}
      />
      {" или "}
      <AuthRadioButton authTypeButton={AuthTypes.signUp} />
    </h1>
  );
};

export default AuthTitle;
