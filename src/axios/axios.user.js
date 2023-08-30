import { BASE_URL } from "../utils";
import axios from "axios";
import { toast } from "react-toastify";

export const createUser = async (nombre, email, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, {
      nombre,
      email,
      password,
    });
    return data;
  } catch (error) {
    let ErrorUsuarioRegistrado =
      "El usuario ya está registrado. Se envió nuevamente código de verificación a";
    let ErrorMsg = error.response.data.errors[0].msg;
    toast.error(ErrorMsg);
    if (ErrorMsg.includes(ErrorUsuarioRegistrado)) {
      return "usuarioRegistrado";
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.msg) {
      // Si hay un mensaje de error en la respuesta, muestra el mensaje con toast.error
      toast.error(error.response.data.msg);
    } else {
      // Si no hay un mensaje de error en la respuesta, muestra un mensaje de error genérico
      toast.error("Hubo un problema al iniciar sesión.");
    }
    console.log({ loginUserError: error });
  }
};

export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}/auth/verify`, {
      email,
      code,
    });

    // Si la respuesta es exitosa, devuelve un objeto con verified:true
    return { verified: true };
  } catch (error) {
    if (error.response && error.response.data && error.response.data.msg) {
      // Si hay un mensaje de error en la respuesta, muestra el mensaje con toast.error
      toast.error(error.response.data.msg);
    } else {
      // Si no hay un mensaje de error en la respuesta, muestra un mensaje de error genérico
      toast.error("Hubo un problema al verificar el usuario.");
    }
    console.log(error);

    // Si hay un error, devuelve un objeto con verified:false y un mensaje de error
    return { verified: false, error: error.response.data.msg };
  }
};
