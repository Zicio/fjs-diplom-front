import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат почты")
    .required("Электронная почта обязательна"),
  password: yup
    .string()
    .min(6, "Длина пароля должна быть не менее 6 символов")
    .required("Пароль обязателен"),
  name: yup.string().required("Имя обязательно"),
  contactPhone: yup.string().required("Контактный телефон обязателен"),
});

export default RegisterSchema;
