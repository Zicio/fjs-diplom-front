import "@/app/globals.css";
import styles from "./Users.module.scss";
import SearchForm from "@/components/Forms/SearchForm";
import UsersList from "@/components/UsersList/UsersList";
import PaginationBar from "@/components/PaginationBar/PaginationBar";

const Users = () => {
  return (
    <main className={`standard-container ${styles.users}`}>
      <h1 className={styles.users__title}>Пользователи</h1>
      <SearchForm />
      <UsersList />
      <PaginationBar />
    </main>
  );
};

export default Users;
