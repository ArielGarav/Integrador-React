import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: transparent;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 450px;
  top: 70px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      opacity: 90%;
    }
  }
  @media (max-width: 1312px) {
    display: none;
  }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 500;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
`;
