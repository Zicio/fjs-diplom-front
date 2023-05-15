"use client";

import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./Form.module.scss";

interface FormValues {
  searchUser: string;
}

const SearchForm = () => {
  const methods = useForm<FormValues>({
    mode: "onSubmit",
  });
  return (
    <FormProvider {...methods}>
      <form className={styles.form} noValidate>
        <FormField
          type="text"
          text="Поиск пользователя"
          id="searchUser"
          name="searchUser"
          placeholder="Введите имя пользователя, id, телефон или почту"
        />
        <Button type="submit" text="Искать" />
      </form>
    </FormProvider>
  );
};

export default SearchForm;
