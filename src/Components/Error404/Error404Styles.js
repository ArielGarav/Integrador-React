import styled, { keyframes } from "styled-components";

const warningAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;
export const TotalError404Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  height: 80vh;
  width: 100%;
`;
export const TextError404 = styled.h1`
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: red;
  text-shadow: 1px 1px 1px black;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${warningAnimation} 0.5s infinite alternate;
`;
