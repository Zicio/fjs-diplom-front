import IUser from "@/interfaces/IUser";
import UserItem from "@/components/UserItem/UserItem";

const mockUsers: IUser[] = [
  {
    id: "1",
    name: "Иван Иванов",
    contactPhone: "8-911-111-11-11",
    email: "XXXXXXXXXXXXXX",
  },
  {
    id: "2",
    name: "Сержант Сержанов",
    contactPhone: "8-911-111-11-11",
    email: "XXXXXXXXXXXXXX",
  },
];

const UsersList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ФИО</th>
          <th>Телефон</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {mockUsers.map((user) => {
          //TODO заменить на список юзеров из запроса (Предположительно хранение в Redux Store)
          return <UserItem key={user.id} params={user} />;
        })}
      </tbody>
    </table>
  );
};

export default UsersList;
