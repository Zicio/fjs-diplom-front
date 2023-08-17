import { FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./FormField.module.scss";
import FormHint from "@/components/FormHint/FormHint";

interface FormFieldProps {
  type: string;
  text: string;
  id: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
}

const FormField: FC<FormFieldProps> = ({
  name,
  type,
  text,
  id,
  placeholder,
  disabled,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label className={styles.form__label} htmlFor={name}>
        {text}
      </label>
      <input
        {...register(name)}
        className={`${styles.form__input} ${
          errors[name] && styles.form__inputInvalid
        } ${disabled && styles.form__inputInactive}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required
      />
      {!!errors[name] && <FormHint text={String(errors[name]?.message)} />}
    </div>
  );
};

export default FormField;
