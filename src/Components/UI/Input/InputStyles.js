import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.input`
  background-color: red;
  outline: none;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  color: white;
  width: 70%;
  margin-top: 1rem;

  ::placeholder {
    opacity: 60%;
    color: white;
  }
  color: white;
  background-color: black;
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
