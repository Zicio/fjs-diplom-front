"use client";

const ProfileButtonSignOut = () => {
  return (
    <button
      type="reset"
      className={`button activeButton`}
      // onClick={() => redirect("/auth")} TODO: реализовать signOut
    >
      Выйти
    </button>
  );
};

export default ProfileButtonSignOut;
