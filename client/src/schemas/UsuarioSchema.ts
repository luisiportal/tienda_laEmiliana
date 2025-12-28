import * as Yup from "yup";

export const usuarioSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[^\s]+$/,
      "El nombre de usuario no debe contener caracteres especiales"
    )
    .max(20, "El nombre de usuario no debe tener más de 20 caracteres")
    .required("El nombre de usuario es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(50, "La contraseña no debe tener más de 50 caracteres")
    .required("Contraseña requerida"),
});

export const usuarioFormSchema = Yup.object().shape({
  user: Yup.string()
    .matches(
      /^[^\s]+$/,
      "El nombre de usuario no debe contener caracteres especiales"
    )
    .max(20, "El nombre de usuario no debe tener más de 20 caracteres")
    .required("El nombre de usuario es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(50, "La contraseña no debe tener más de 50 caracteres")
    .required("Contraseña requerida"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
    .required("Confirmación de contraseña requerida"),

  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es requerido"),
 });

export const updateUserFormSchema = Yup.object().shape({
  user: Yup.string()
    .matches(
      /^[^\s]+$/,
      "El nombre de usuario no debe contener caracteres especiales"
    )
    .max(20, "El nombre de usuario no debe tener más de 20 caracteres"),

  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(50, "La contraseña no debe tener más de 50 caracteres"),

  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es requerido"),

});
