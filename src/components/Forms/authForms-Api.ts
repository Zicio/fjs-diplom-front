import { FormValues } from "@/components/Forms/LoginForm";
import { TypeOfForm } from "@/modules/AuthMenu/AuthMenu";

export const authRequest = async (data: FormValues, type: TypeOfForm) => {
  try {
    const response = await fetch(
      process.env.BACKEND_URL + `/api/auth/${type}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (response.status === 401) {
      const message =
        type === "login"
          ? "Пользователь с таким email не найден / неверный пароль"
          : "Пользователь с таким email уже существует";
      throw new Error(message);
    }

    if (response.ok) {
      return response;
    }

    throw new Error("Неизвестная ошибка");
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
