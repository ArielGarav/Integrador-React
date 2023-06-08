import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import LoginInput from "../../Components/UI/LoginInput/LoginInput";

import { Form, LoginContainerStyled, LoginEmailStyled } from "./LoginStyles";
import { useDispatch } from "react-redux";
import { loginInitialValues } from "../../formik/initialValues";
import { useRedirect } from "../../hooks/useRedirect";

import { loginValidationSchema } from "../../formik/validationSchema";
import { loginUser } from "../../axios/axios.user";
import { setCurrentUser } from "../../redux/user/userSlice";
import Submit from "../../Components/UI/Submit/Submit";

const Login = () => {
  const dispatch = useDispatch();
  useRedirect("/");
  return (
    <LoginContainerStyled>
      <h1>Login</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
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
