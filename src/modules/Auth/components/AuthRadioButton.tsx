"use client";

import styles from "@/modules/Auth/Auth.module.scss";
import { AuthContext, AuthTypes } from "@/modules/Auth/Auth";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";

const AuthRadioButton: FC<{ authTypeButton: AuthTypes; dataId?: string }> = ({
  authTypeButton,
  dataId,
}) => {
  const { authType, setAuthType } = useContext(AuthContext);
  const [activeInput, setActiveInput] = useState(false);

  useEffect(() => {
    setActiveInput(true);
  }, []);

  return (
    <label htmlFor={authTypeButton}>
      <input
        className={styles.auth__input}
        type="radio"
        name="authType"
        id={authTypeButton}
        value={authTypeButton}
        checked={authType === authTypeButton}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setAuthType(event.target.value as AuthTypes)
        }
        data-id={dataId}
        disabled={!activeInput}
      />
      <span className={styles.auth__customInput}></span>
      {authTypeButton === AuthTypes.signIn ? "Войти" : "Зарегистрироваться"}
    </label>
  );
};

export default AuthRadioButton;
