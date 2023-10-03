import { FC, ReactNode } from "react";
import styles from "./Profile.module.css";
import default_avatar from "../../../public/default_avatar.svg";
import Image from "next/image";

const Profile: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.profile}>
      {children}
      <div className={styles.profile__avatar}>
        <Image src={default_avatar} width={40} alt="неизвестный пользователь" />
      </div>
    </div>
  );
};

export default Profile;
