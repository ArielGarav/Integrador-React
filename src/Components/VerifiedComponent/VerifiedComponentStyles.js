import styled from "styled-components";

export const VerifiedComponentContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  h1 {
    margin-bottom: 2rem;
  }
`;
export const VerifiedComponentText = styled.h1`
  font-size: 50px;
`;
export const VerifiedComponentDeniedContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
export const VerifiedComponentAcceptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const VerifiedComponentFormStyled = styled.form`
  display: flex;
  gap: 20px;
  position: relative;
`;

export const VerifiedComponentSearchBarStyled = styled.input`
  background-color: var(--gray-bg);
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: white;
`;

export const IconWrapperStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;
`;

export const VerifiedComponentBtnStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;
