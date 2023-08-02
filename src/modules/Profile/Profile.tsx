import { FC, ReactNode } from "react";
import styles from "./Profile.module.scss";

const Profile: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <div className={styles.profile}>{children}</div>;
};

export default Profile;
