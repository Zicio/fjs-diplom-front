import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ISignInFormValues,
  ISignInResponse,
} from "@/modules/Auth/components/Forms/AuthSignInForm";
import {
  ISignUpFormValues,
  ISignUpResponse,
} from "@/modules/Auth/components/Forms/AuthSignUpForm";
import { RootState } from "@/redux/store";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: (process.env.BACKEND_URL || "http://localhost:4000") + `/api`,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user?.accessToken;
      if (token) {
        console.log({ token });
        headers.set("authorization", "Bearer " + token);
      }
      return headers;
    },
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
    signOut: builder.mutation<null, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } =
  authApi;
