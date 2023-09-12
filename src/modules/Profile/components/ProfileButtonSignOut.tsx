"use client";

import { useSignOutMutation } from "@/redux/services/authApi";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { userActions } from "@/redux/reducers/UserSlice";

const ProfileButtonSignOut = () => {
  const [signOut, { isLoading, isSuccess, error }] = useSignOutMutation();
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    await signOut();
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.clear();
      dispatch(userActions.deleteUser());
    }
  }, [dispatch, isSuccess]);

  return (
    <button
      type="reset"
      className={`button activeButton`}
      onClick={handleClick}
    >
      Выйти
    </button>
  );
};

export default ProfileButtonSignOut;
