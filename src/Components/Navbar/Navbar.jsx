import React, { useEffect, useState } from "react";
import {
  IconLogoMobile,
  LILinks,
  LogoImg,
  NavContainer,
  NavLink,
  NavLinkJump,
  NavMenu,
  SpanUserNavStyled,
  UlLinks,
  UserContainerStyled,
} from "./NavbarStyles";

import { FaUserAlt, FaHome, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./../../assets/logos/STYLESHOES.png";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import ModalUser from "./ModalUser/ModalUser";
const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click, setclick] = useState(false);
  const ChangeClick = () => {
    setclick(!click);
  };
  const closeMenu = () => {
    setclick(false);
  };
  useEffect(() => {
    // Agregar evento de scroll al componente
    window.addEventListener("scroll", closeMenu);

    // Remover el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);
  return (
    <>
      <NavMenu>
        <LogoImg src={Logo} alt="logo" />
        <NavContainer
          click={click}
          onClick={() => {
            setclick(!click);
          }}
        >
          <ModalCart />
          <ModalUser />

          <div>
            <UlLinks>
              <LILinks>
                <NavLink to={"About"}>About</NavLink>
              </LILinks>
              <LILinks>
                <NavLink to={"Brands"}>Brands</NavLink>
              </LILinks>

              <LILinks>
                <NavLink to={"Contact"}>Contact</NavLink>
              </LILinks>
            </UlLinks>
          </div>
          <div>
            <UlLinks>
              <LILinks>
                <NavLinkJump to={"Jump"} className="Jump">
                  JUMP
                </NavLinkJump>
              </LILinks>
            </UlLinks>
          </div>
          <div>
            <UlLinks>
              <LILinks>
                <NavLink to={"/"}>
                  <FaHome />
                </NavLink>
              </LILinks>
              <LILinks>
                <NavLink>
                  <CartIcon />
                </NavLink>
              </LILinks>
              <LILinks>
                <UserContainerStyled
                  onClick={() =>
                    currentUser
                      ? dispatch(toggleHiddenMenu())
                      : navigate("/register")
                  }
                >
                  <SpanUserNavStyled>
                    {currentUser ? `${currentUser.nombre}` : "Inicia sesión"}
                  </SpanUserNavStyled>
                  <FaUserAlt />
                </UserContainerStyled>
              </LILinks>
            </UlLinks>
          </div>
        </NavContainer>
        <IconLogoMobile onClick={() => ChangeClick()}>
          {click ? <FaTimes /> : <FaBars />}
        </IconLogoMobile>
      </NavMenu>
    </>
  );
};

export default Navbar;
