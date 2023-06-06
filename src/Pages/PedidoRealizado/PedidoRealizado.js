import styled from "styled-components";

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
`;

export const TitleStyled = styled.h1`
  background: var(--btn-gradient);
  -webkit-text-fill-color: transparent;
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    margin-bottom: 50px;
  }
`;
