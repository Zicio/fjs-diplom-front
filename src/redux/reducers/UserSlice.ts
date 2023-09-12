import { ISignInResponse } from "@/modules/Auth/components/Forms/AuthSignInForm";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser extends ISignInResponse {
  accessToken: string;
}

type defaultUser = IUser | null;

const initialState = null as defaultUser;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      return action.payload;
    },
    deleteUser: () => {
      return null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
