import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";

export const CheckoutDatosStyled = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 1060px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
