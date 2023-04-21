const AuthForm = () => {
  return (
    <section className="grid gap-6 absolute right-0 top-[110%] bg-white p-6 rounded-md">
      <span>
        <button
          className="text-purple-900 hover:text-purple-600 hover:underline"
          type="button"
        >
          Войти
        </button>{" "}
        или{" "}
        <button
          className="text-purple-900 hover:text-purple-600 hover:underline"
          type="button"
        >
          Зарегистрироваться
        </button>
      </span>
      <form className="grid grid-rows-3 gap-4">
        <div className="border border-blue-200 rounded-md">
          <label className="hidden" htmlFor="login">
            Логин пользователя
          </label>
          <input
            className="p-1 w-full"
            type="text"
            id="login"
            name="login"
            placeholder="Введите логин"
            required
          />
        </div>
        <div className="border border-blue-200 rounded-md">
          <label className="hidden" htmlFor="password">
            Пароль пользователя
          </label>
          <input
            className="p-1 w-full"
            type="text"
            id="password"
            name="password"
            placeholder="Введите пароль"
            required
          />
        </div>
        <button
          className="w-[30%] bg-blue-700 text-white rounded-md hover:bg-blue-500"
          type="submit"
        >
          Войти
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
