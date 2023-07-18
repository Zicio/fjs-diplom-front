"use client";

import { createContext, FC, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Profile.module.scss";

export const ProfileContext = createContext(false);

const Profile: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ProfileContext.Provider value={true}>
      <div className={styles.profile}>{children}</div>
    </ProfileContext.Provider>
  );
};

// const token: MutableRefObject<number> = useRef(-1);
//
// const handleSignOut = async () => {
//   try {
//     await signOutRequest();
//     localStorage.removeItem("user");
//   } catch (e) {
//     throw new Error((e as Error).message);
//   }
// };
//
// useEffect(() => {
//   token.current = document.cookie.indexOf("token");
// }, []);
//
// return (
//   <div className={styles.profile}>
//     {token.current !== -1 ? (
//       <button type="submit" onClick={handleSignOut}>
//         Выйти
//       </button>
//     ) : (
//       <button type="button" onClick={() => router.push("/auth")}>
//         Войти
//       </button>
//     )}
//     <div className={styles.profile__avatar}>
//       <Image src={default_avatar} width={40} alt="неизвестный пользователь" />
//     </div>
//   </div>
// );

export default Profile;
