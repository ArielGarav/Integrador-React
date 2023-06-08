import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: white;
  background-color: black; /* Actualización del fondo a negro */
  border-radius: 15px;
  border: 1px solid white;
  outline: none;
  caret-color: white;

  ::placeholder {
    opacity: 80%;
    color: white;
  }
  color: white;
  background-color: black;

  /* Estilos adicionales cuando hay error */
  ${({ isError }) =>
    isError &&
    `
    border-color: #fb103d;
  `}
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
