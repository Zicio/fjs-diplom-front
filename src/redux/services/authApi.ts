import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ISignInFormValues,
  ISignInResponse,
} from "@/modules/Auth/components/Forms/AuthSignInForm";
import {
  ISignUpFormValues,
  ISignUpResponse,
} from "@/modules/Auth/components/Forms/AuthSignUpForm";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: (process.env.BACKEND_URL || "http://localhost:4000") + `/api`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<ISignInResponse, ISignInFormValues>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    signUp: builder.mutation<ISignUpResponse, ISignUpFormValues>({
      query: (data) => ({
        url: "client/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
