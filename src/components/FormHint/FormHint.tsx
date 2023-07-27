import { FC } from "react";
import styles from "./FormHint.module.scss";

interface FormHintProps {
  text: string;
}

const FormHint: FC<FormHintProps> = ({ text }) => {
  return <p className={styles.form__hint}>{text}</p>;
};

export default FormHint;
