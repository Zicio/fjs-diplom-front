import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  isValid?: boolean;
}

const Button: FC<ButtonProps> = ({ type, isValid, text }) => {
  if (isValid === undefined) {
    return (
      <button className={styles.button + " " + styles.activeButton} type={type}>
        {text}
      </button>
    );
  }
  return (
    <button
      className={
        styles.button +
        " " +
        (isValid ? styles.activeButton : styles.unactiveButton)
      }
      type={type}
      disabled={!isValid}
    >
      {text}
    </button>
  );
};

export default Button;
