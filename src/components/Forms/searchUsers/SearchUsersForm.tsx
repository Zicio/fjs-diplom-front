"use client";

import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import styles from "../../../modules/Auth/components/forms/Form.module.scss";
import { ISignInResponse } from "@/components/Forms/signIn/SignInForm";
import searchUsersApi from "@/components/Forms/searchUsers/searchUsers-Api";

export interface ISearchUsersFormValues {
  searchUser: string;
}

const SearchUsersForm = () => {
  const methods = useForm<ISearchUsersFormValues>({
    mode: "onSubmit",
  });

  const onSubmit = async (data: ISearchUsersFormValues) => {
    try {
      const response = await searchUsersApi(data);
      const json: ISignInResponse = await response.json();
      console.log(json);
      localStorage.user = json;
    } catch (e) {
      setErrorResponse((e as Error).message);
    }
  };

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
        <Button type="submit" text="Искать" isActive={true} />
      </form>
    </FormProvider>
  );
};

export default SearchUsersForm;
