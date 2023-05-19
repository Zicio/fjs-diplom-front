import { FC } from "react";
import IUser from "@/interfaces/IUser";

const UserItem: FC<{ params: IUser }> = ({ params }) => {
  const { id, name, email, contactPhone } = params;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{contactPhone}</td>
    </tr>
  );
};

export default UserItem;
