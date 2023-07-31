import { ISignUpFormValues } from "@/components/Forms/signUp/SignUpForm";

const signUpRequest = async (data: ISignUpFormValues): Promise<Response> => {
  return await fetch(
    (process.env.BACKEND_URL || "http://localhost:4000") +
      `/api/client/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
};

export default signUpRequest;

//   if (response.ok) {
//     return response;
//   }
//
//   if (response.status === 400) {
//     throw new Error("Пользователь с таким email уже существует");
//   }
//
//   throw new Error("Неизвестная ошибка");
// };
