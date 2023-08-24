import { BASE_URL } from "../utils";
import axios from "axios";

export const createUser = async (nombre, email, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, {
      nombre,
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log({ createUserError: error });
    let ErrorUsuarioRegistrado =
      "El usuario ya está registrado. Se envió nuevamente código de verificación a";
    let ErrorMsg = error.response.data.errors[0].msg;
    alert(ErrorMsg);
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
    console.log({ loginUserError: error });

    console.log(error.response.data.errors[0].msg);
  }
};

// export const verifyUser = async (email, code) => {
//   try {
//     const response = await axios.patch(`${BASE_URL}/auth/verify`, {
//       email,
//       code,
//     });
//     alert("Usuario verificado");
//     return "Usuario verificado";
//   } catch (error) {
//     console.log(error);
//     alert(error.response.data.msg);
//     return error;
//   }
// };
export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}/auth/verify`, {
      email,
      code,
    });

    // Si la respuesta es exitosa, devuelve un objeto con verified:true
    return { verified: true };
  } catch (error) {
    console.log(error);

    // Si hay un error, devuelve un objeto con verified:false y un mensaje de error
    return { verified: false, error: error.response.data.msg };
  }
};
