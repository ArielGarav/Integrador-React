import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginInput from "../../components/UI/LoginInput/LoginInput";

import { Form, ValidateContainerStyled } from "./ValidateStyles";
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
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser.verified) {
      navigate("/Verified?");
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <h1>Validar cuenta</h1>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async (values) => {
          await verifyUser(currentUser.email, values.code);
          dispatch(setVerified());
          navigate("/Verified");
        }}
      >
        <Form>
          <LoginInput name="code" type="code" placeholder="code" />
          <Submit>Validar</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Validate;
