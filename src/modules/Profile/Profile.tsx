"use client";

import { createContext, FC, ReactNode } from "react";
import styles from "./Profile.module.scss";

export const ProfileContext = createContext(false);

const Profile: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <ProfileContext.Provider value={false}>
      <div className={styles.profile}>{children}</div>
    </ProfileContext.Provider>
  );
};

export default Profile;
