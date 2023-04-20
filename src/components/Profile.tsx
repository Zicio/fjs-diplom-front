import Image from "next/image";
import default_avatar from "../../public/default_avatar.svg";

const Profile = () => {
  return (
    <div className="flex justify-end items-center bg-white p-3 rounded-md">
      <button type="button">
        <span>▸ </span>Войти
      </button>
      <Image
        className="w-10 ml-4"
        src={default_avatar}
        alt="неизвестный пользователь"
      />
    </div>
  );
};

export default Profile;
