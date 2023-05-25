export const getUsers = async () => {
  try {
    const response = await fetch(process.env.BACKEND_URL + "/api/");
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
