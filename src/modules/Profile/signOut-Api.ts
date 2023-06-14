const signOutRequest = async (): Promise<Response> => {
  return await fetch(
    (process.env.BACKEND_URL || "http://localhost:4000") + `/api/auth/logout`,
    {
      method: "POST",
    },
  );
};

export default signOutRequest;
