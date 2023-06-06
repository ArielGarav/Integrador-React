import styled from "styled-components";

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  @media (max-width: 1060px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    padding: 2rem 1rem;
  }
`;
