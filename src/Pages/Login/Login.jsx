import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import { Form, LoginContainerStyled, LoginEmailStyled } from "./LoginStyles";
import { useDispatch } from "react-redux";
import { loginInitialValues } from "../../formik/initialValues";
import { useRedirect } from "../../hooks/useRedirect";

import { loginValidationSchema } from "../../formik/validationSchema";
import { loginUser } from "../../axios/axios.user";
import { setCurrentUser } from "../../redux/user/userSlice";
import LoginInput from "../../Components/UI/LoginInput/LoginInput";
import Submit from "../../Components/UI/Submit/Submit";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <LoginContainerStyled>
      <h1>Login</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);

          console.log(user);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
            // Redirige al componente "verified" después del inicio de sesión exitoso si está verificado
            if (user.usuario.verified) {
              navigate("/verified");
            } else {
              // Si no está verificado, redirige nuevamente a la página de validación
              navigate("/validate");
            }
          }
        }}
      >
        <Form>
          <LoginInput type="text" name="email" placeholder="Email" />
          <LoginInput type="password" name="password" placeholder="Password" />

          <Link to="/register">
            <LoginEmailStyled>
              Don't have an account? create one here
            </LoginEmailStyled>
          </Link>
          <Submit type="button">Log In</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
