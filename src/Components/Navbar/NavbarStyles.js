import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavMenu = styled.nav`
  // menu
  color: #fff;
  height: 70px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1310px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0, 5s all ease-in;
    background-color: black;
    justify-content: center;
    z-index: 999999;
  }
`;
export const UlLinks = styled.ul`
  //menu__links
  height: 100%;
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (width <1310px) {
    flex-direction: column;
  }
`;

export const LILinks = styled.li`
  //menu__item
  list-style: none;
  height: 100%;
  --clip: polygon(0 0, 100% 0, 100% 0, 0 0);
  --transform: rotate(-90deg);
  .menu__item:hover {
    --clip: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    --transform: rotate(0);
  }
  @media screen and (max-width: 1310px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 25px;
  }
`;

export const NavLink = styled(Link)`
  //menu__link
  color: #ffff;
  text-decoration: none;
  padding: 0 30px;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 28px;
  font-weight: 500;
  --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
  flex-direction: column;
  &:after {
    content: "XSDD";
    display: block;
    background: rgb(255, 255, 255);
    width: 90%;
    margin-top: 3px;
    height: 3px;
    clip-path: var(--clippy);
    transition: clip-path 0.3s;
  }
  &:hover {
    --clippy: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 150px;
  height: 75px;
`;
// carrito
export const LinkContainenIconoCart = styled.div`
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  span {
    font-size: 1.3rem;
  }
`;
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;
export const LinkContainerStyled = styled.div`
  font-size: 1.4rem;
`;
export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;
export const SpanUserNavStyled = styled.span`
  color: #ffff;
  text-decoration: none;
  padding: 0 30px;
  height: 100%;
  align-items: center;
  font-size: 28px;
  font-weight: 500;
  --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);

  &:after {
    content: "XSDD";
    display: block;
    background: rgb(255, 255, 255);
    width: 90%;
    margin-top: 3px;
    height: 3px;
    clip-path: var(--clippy);
    transition: clip-path 0.3s;
  }
  &:hover {
    --clippy: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;
export const NavLinkJump = styled(Link)`
  //menu__link
  color: #fff;
  text-decoration: none;
  padding: 20px 10px;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 28px;
  font-weight: 500;
  --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
  flex-direction: column;
  border: 4px solid white;
  &:after {
    content: "XSDD";
    display: block;
    background: rgb(255, 255, 255);
    width: 90%;
    margin-top: 3px;
    height: 3px;
    clip-path: var(--clippy);
    transition: clip-path 0.3s;
  }
  &:hover {
    --clippy: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;
//menu hamburger
export const IconLogoMobile = styled.div`
  display: none;
  @media screen and (max-width: 1310px) {
    display: flex;
    color: #ebc08b;
    font-size: 32px;
  }
`;
