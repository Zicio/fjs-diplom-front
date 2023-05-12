import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  isValid?: boolean;
}

const Button: FC<ButtonProps> = ({ type, isValid, text }) => {
  return (
    <button
      className={`${
        isValid ? "bg-blue-700 hover:bg-blue-500" : "bg-blue-700 opacity-50"
      } ${styles.button} `}
      type={type}
      disabled={!isValid}
    >
      {text}
    </button>
  );
};

export default Button;
