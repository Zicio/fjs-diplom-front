import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат почты")
    .required("Электронная почта обязательна"),
  password: yup
    .string()
    .min(6, "Минимальная длина пароля 6 символов")
    .required("Пароль обязателен"),
});

export default schema;
