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

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/login");
  //   } else if (currentUser.verified) {
  //     navigate("/Verified");
  //     console.log(currentUser.verified);
  //   }
  // }, [currentUser, navigate]);
  useEffect(() => {
    if (!currentUser.verified) {
      // Cambia el condicional a !currentUser.verified
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

            // Dentro del bloque try en el onSubmit de Validate.js
            if (response.verified) {
              dispatch(setVerified());
              navigate("/login"); // Cambia esto a la página "login" si es necesario
            } else {
              setFieldError("code", response.error || "Código incorrecto");
            }
          } catch (error) {
            console.error(error);
            // Maneja otros errores aquí
          } finally {
            setSubmitting(false);
          }
        }}

        // if (data === currentUser) {
        //   console.log("sexo");
        // }
        // console.log(data);
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
