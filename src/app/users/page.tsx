import SearchForm from "@/components/Forms/SearchForm";

const UsersPage = async () => {
  return (
    <main>
      <h1>Пользователи</h1>
      <SearchForm />
      {/*<UsersList />*/}
    </main>
  );
};

export default UsersPage;
