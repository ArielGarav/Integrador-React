import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginInput from "../../Components/UI/LoginInput/LoginInput";

import {
  Form,
  ValidateContainerStyled,
  ValidateContainerText,
} from "./ValidateStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setVerified } from "../../redux/user/userSlice";
import Submit from "../../Components/UI/Submit/Submit";
import { verifyUser } from "../../axios/axios.user";
import { Formik } from "formik";
import { validateInitialValues } from "../../formik/initialValues";
import { validateValidationSchema } from "../../formik/validationSchema";
const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser.verified) {
      navigate("/validate");
    }
  }, [currentUser, navigate]);
  return (
    <ValidateContainerStyled>
      <ValidateContainerText>Validar cuenta</ValidateContainerText>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          try {
            const response = await verifyUser(values.email, values.code);

            if (response.verified) {
              dispatch(setVerified());
              navigate("/login");
            } else {
              setFieldError("code", response.error || "Código incorrecto");
            }
          } catch (error) {
            console.error(error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Form>
          <LoginInput
            name="email"
            type="email"
            placeholder="Insert you Email"
          />

          <LoginInput name="code" type="code" placeholder="code" />

          <Submit>Validar</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Validate;
