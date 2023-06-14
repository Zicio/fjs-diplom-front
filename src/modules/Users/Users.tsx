import styles from "./Users.module.css";
import SearchUsersForm from "@/components/Forms/searchUsers/SearchUsersForm";
import UsersList from "@/components/UsersList/UsersList";
import PaginationBar from "@/components/PaginationBar/PaginationBar";

const Users = () => {
  return (
    <main className={`standard-container ${styles.users}`}>
      <h1 className={styles.users__title}>Пользователи</h1>
      <SearchUsersForm />
      <UsersList />
      <PaginationBar />
    </main>
  );
};

export default Users;
