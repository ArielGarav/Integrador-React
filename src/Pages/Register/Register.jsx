import React from "react";
import { Formik } from "formik";

import LoginInput from "../../Components/UI/LoginInput/LoginInput";
import Submit from "../../Components/UI/Submit/Submit";

import { Form, LoginContainerStyled, LoginEmailStyled } from "./RegisterStyles";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import { createUser } from "../../axios/axios.user";
import { setCurrentUser } from "../../redux/user/userSlice";
import { useRedirect } from "../../hooks/useRedirect";

const Register = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");

  return (
    <LoginContainerStyled>
      <h1>Creat Your Account</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          );
          actions.resetForm();
          //actions.preventDefault()
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
          <LoginInput type="text" name="name" placeholder="Name" />
          <LoginInput type="text" name="email" placeholder="Email" />
          <LoginInput type="password" name="password" placeholder="Password" />

          <LoginEmailStyled to="/login">
            <p>Do you already have an account? Log in</p>
          </LoginEmailStyled>
          <Submit type="button">Register Now</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
