import { ISignInFormValues } from "@/components/Forms/signIn/SignInForm";

const signInRequest = async (data: ISignInFormValues) => {
  return await fetch(
    (process.env.BACKEND_URL || "http://localhost:4000") + `/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  // if (response.ok) {
  //   return response;
  // }
  //
  // if (response.status === 401) {
  //   throw new Error("Пользователь с таким email не найден / неверный пароль");
  // }
  //
  // throw new Error("Неизвестная ошибка");
};

export default signInRequest;
