"use client";

import SignInForm from "@/components/Forms/signIn/SignInForm";
import { useState } from "react";

const AuthPage = () => {
  const [form, setForm] = useState("login");
  return (
    <div>
      <h1>Войти или Зарегистрироваться</h1>
      <SignInForm />
    </div>
  );
};

export default AuthPage;
