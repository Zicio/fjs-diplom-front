import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  isActive: boolean;
}

const Button: FC<ButtonProps> = ({ type, isActive = true, text }) => {
  return (
    <button
      className={
        styles.button +
        " " +
        (isActive ? styles.activeButton : styles.unactiveButton)
      }
      type={type}
      disabled={!isActive}
    >
      {text}
    </button>
  );
};

export default Button;
