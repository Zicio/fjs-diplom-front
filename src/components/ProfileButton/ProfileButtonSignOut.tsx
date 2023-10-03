"use client";

const ProfileButtonSignOut = () => {
  const handleClick = async () => {
    console.log("sign out");
  };

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
