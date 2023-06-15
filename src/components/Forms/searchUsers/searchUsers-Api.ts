import getCurrentUserRole from "@/utils/getCurrentUserRole";
import { redirect } from "next/navigation";
import { ISearchUsersFormValues } from "@/components/Forms/searchUsers/SearchUsersForm";

const getUsersRequest = async (data: ISearchUsersFormValues) => {
  try {
    const role = getCurrentUserRole();
    if (role) {
      const response = await fetch(
        process.env.BACKEND_URL + `/api/${role}/users`,
      );
      if (!response.ok) {
        throw new Error("ошибка запроса");
      }
      return await response.json();
    }
    redirect("/");
  } catch (e) {
    if (e.response) {
      const { message } = await e.response.json();
      console.error("Ошибка при отправке запроса", message);
    }
    console.error("Ошибка при отправке запроса", e.message);
  }
};

export default getUsersRequest;
