import styles from "../Profile.module.scss";
import Image from "next/image";
import default_avatar from "../../../../public/default_avatar.svg";

const ProfileLogo = () => {
  return (
    <div className={styles.profile__avatar}>
      <Image src={default_avatar} width={40} alt="неизвестный пользователь" />
    </div>
  );
};

export default ProfileLogo;
