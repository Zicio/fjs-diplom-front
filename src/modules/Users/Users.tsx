import styles from "./Users.module.scss";
import SearchUsersForm from "@/components/Forms/SearchUsersForm";
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
