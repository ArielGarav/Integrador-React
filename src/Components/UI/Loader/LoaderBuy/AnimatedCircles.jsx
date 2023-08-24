import React from "react";
import styled, { keyframes } from "styled-components";

// Define los keyframes para las animaciones
const circleAnimation = keyframes`
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
`;

const shadowAnimation = keyframes`
  0% {
    transform: scaleX(1.5);
  }
  40% {
    transform: scaleX(1);
    opacity: .7;
  }
  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
`;

// Estilos para los componentes usando Styled Components
const Wrapper = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: ${circleAnimation} 0.5s alternate infinite ease;
`;

const SecondCircle = styled(Circle)`
  left: 45%;
  animation-delay: 0.2s;
`;

const ThirdCircle = styled(Circle)`
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
`;

const Shadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: ${shadowAnimation} 0.5s alternate infinite ease;
`;

const SecondShadow = styled(Shadow)`
  left: 45%;
  animation-delay: 0.2s;
`;

const ThirdShadow = styled(Shadow)`
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
`;

// Componente principal
const AnimatedCircles = () => {
  return (
    <Wrapper>
      <Circle />
      <SecondCircle />
      <ThirdCircle />
      <Shadow />
      <SecondShadow />
      <ThirdShadow />
    </Wrapper>
  );
};

export default AnimatedCircles;
