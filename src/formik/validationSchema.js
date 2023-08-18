import * as Yup from "yup";
import { regEmail } from "../utils";
export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Faltan datos"),
  cellphone: Yup.string().required("Faltan datos"),
  location: Yup.string().required("Faltan datos"),
  address: Yup.string().required("Faltan datos"),
});
export const registerValidationSchema = Yup.object({
  name: Yup.string().required("ingrese un Nombre"),
  email: Yup.string()
    .matches(regEmail, "Email invalido")
    .required("ingrese un Email"),
  password: Yup.string()
    .min(6, "minimo de caracteres 6")
    .required("ingrese una Contraseña"),
});
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, "Email invalido")
    .required("ingrese un Email"),
  password: Yup.string()
    .min(6, "minimo de caracteres 6")
    .required("ingrese una Contraseña"),
});
export const validateValidationSchema = Yup.object({
  code: Yup.string()
    .min(6, "Mínimo de caracteres: 6")
    .max(6, "Máximo de caracteres: 6")
    .required("Campo Requerido"),
});
