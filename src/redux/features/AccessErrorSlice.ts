import { createSlice } from "@reduxjs/toolkit";

interface AccessError {
  type: "auth" | "role" | null;
  missingRole: "admin" | "manager" | null;
}

const initialState = {
  type: null,
  missingRole: null,
} as AccessError;

export const accessErrorSlice = createSlice({
  name: "accessError",
  initialState,
  reducers: {
    reset: () => initialState,
    setAuthError: (state) => {
      state.type = "auth";
    },
    setRoleAdminError: (state) => {
      state.type = "role";
      state.missingRole = "admin";
    },
    setRoleManagerError: (state) => {
      state.type = "role";
      state.missingRole = "manager";
    },
  },
});

export const { reset, setAuthError, setRoleAdminError, setRoleManagerError } =
  accessErrorSlice.actions;
export default accessErrorSlice.reducer;
