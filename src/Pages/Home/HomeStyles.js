import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  margin: 70px;
  width: 90%;
  justify-content: center;
  align-self: center;
  gap: 100px;
  height: 60vh;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-left: 10px;
  }
`;
