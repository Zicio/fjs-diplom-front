import { FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./FormField.module.css";

interface FormFieldProps {
  type: string;
  text: string;
  id: string;
  name: string;
  placeholder: string;
}

const FormField: FC<FormFieldProps> = ({
  name,
  type,
  text,
  id,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {text}
      </label>
      <input
        {...register(name)}
        className={`${errors[name] ? "border-red-500" : "border-blue-200"} ${
          styles.form__input
        }`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required
      />
      {errors[name] && (
        <p className={styles.form_hint}>{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default FormField;
