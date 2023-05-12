"use client";

import FormField from "@/components/FormField/FormField";
import Button from "@/components/Button/Button";

const SearchForm = () => {
  return (
    // TODO: добавить react-hook-form
    <form>
      <FormField
        type="text"
        text="Поиск пользователя"
        id="searchUser"
        name="searchUser"
        placeholder="Введите имя пользователя, id, телефон или почту"
      />
      <Button type="submit" text="Искать" />
    </form>
  );
};

export default SearchForm;
