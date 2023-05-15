import { FC } from "react";
import IUser from "@/interfaces/IUser";

const UserItem: FC<{ params: IUser }> = ({ params }) => {
  const { id, name, email, contactPhone } = params;
  return (
    <tr>
      <th>{id}</th>
      <th>{name}</th>
      <th>{email}</th>
      <th>{contactPhone}</th>
    </tr>
  );
};

export default UserItem;
