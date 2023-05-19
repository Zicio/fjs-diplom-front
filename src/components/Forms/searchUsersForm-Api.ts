type Roles = "client" | "admin" | "manager";

export const getUsers = async () => {
  // TODO Получить роль пользователя
  const role: Roles = "admin";
  if ()
  try {
    const response = await fetch(process.env.BACKEND_URL + "/api/");
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
