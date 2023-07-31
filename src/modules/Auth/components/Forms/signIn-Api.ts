import { ISignInFormValues } from "@/modules/Auth/components/Forms/AuthSignInForm";

const signInRequest = async (data: ISignInFormValues) => {
  return await fetch(
    (process.env.BACKEND_URL || "http://localhost:4000") + `/api/auth/login`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
};

export default signInRequest;
