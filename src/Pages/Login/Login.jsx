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
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../Components/UI/Submit/Submit";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useRedirect("/Verified?");
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
          }
          // if (user) {
          //   dispatch(setCurrentUser(user)); // Guarda el usuario en el almacenamiento Redux.
          //   if (user.usuario.verified) {
          //     console.log("sexo");
          //     navigate("/Verified");
          //   }
          // }
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
