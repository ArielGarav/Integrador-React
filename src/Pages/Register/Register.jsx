import React from "react";
import { Formik } from "formik";
import Submit from "../../Components/UI/Submit/Submit";
import { Form, LoginContainerStyled, LoginEmailStyled } from "./RegisterStyles";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import { createUser } from "../../axios/axios.user";
import { setCurrentUser } from "../../redux/user/userSlice";
import LoginInput from "../../Components/UI/LoginInput/LoginInput";
import { useRedirect } from "../../hooks/useRedirect";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);

  // Verificar si el usuario ya está autenticado y no está verificado
  if (currentUser && !currentUser.verified) {
    navigate("/validate"); // Redirigir a la página de validación
    return null; // No renderices el formulario de registro
  }

  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");

  const handleRegistration = async (values, actions) => {
    // Intenta registrar al usuario, por ejemplo, llamando a una API
    try {
      const user = await createUser(values.name, values.email, values.password);
      // Acciones después del registro exitoso
      actions.resetForm();
      console.log(user);

      // Actualiza el estado del usuario si el registro fue exitoso
      if (user) {
        dispatch(
          setCurrentUser({
            ...user.usuario,
            token: user.token,
          })
        );

        // Redirige a la página deseada después del registro exitoso
        navigate("/"); // Cambia esto a la página a la que deseas redirigir después del registro exitoso
      }
    } catch (error) {
      // Manejo de errores en caso de que el registro falle
      console.error(error);
    }
  };

  return (
    <LoginContainerStyled>
      <h1>Create Your Account</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleRegistration}
      >
        <Form>
          <LoginInput type="text" name="name" placeholder="Name" />
          <LoginInput type="text" name="email" placeholder="Email" />
          <LoginInput type="password" name="password" placeholder="Password" />

          <LoginEmailStyled to="/login">
            <p>Do you already have an account? Log in</p>
          </LoginEmailStyled>

          <Submit type="submit">Register Now</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
