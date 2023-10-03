import { ReactNode } from "react";
import styles from "./auth.module.css";
import AuthRadioButton from "@/app/auth/AuthRadioButton";

export enum AuthTypes {
  signIn = "signIn",
  signUp = "signUp",
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  // const toBeSelectedId = useId();

  //  Костыль для отображения первоначального положения радио кнопок. В Next JS with App Router c этим пока проблема https://github.com/vercel/next.js/issues/49499
  // useEffect(() => {
  //   const checkedInput: HTMLInputElement | null = document.querySelector(
  //     `[data-id="${toBeSelectedId}"]`,
  //   );
  //   if (checkedInput) {
  //     checkedInput.checked = true;
  //   }
  // }, [toBeSelectedId]);

  return (
    <>
      <h1 className={styles.auth__title}>
        <AuthRadioButton authTypeButton={AuthTypes.signIn} />
        {" или "}
        <AuthRadioButton authTypeButton={AuthTypes.signUp} />
      </h1>
      {children}
    </>
  );
}
