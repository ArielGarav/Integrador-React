import React, { useState } from "react";
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
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/user/userSlice";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click, setclick] = useState(false);

  const ChangeClick = () => {
    setclick(!click);
  };

  const handleMenuToggle = () => {
    setclick(!click);
  };

  return (
    <>
      <NavMenu>
        <LogoImg
          src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686131091/Logo%20Styled%20Shoes/lcyezftq07oazsfbgwot.png"
          alt="logo"
        />
        <NavContainer click={click} onClick={handleMenuToggle}>
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
        <IconLogoMobile onClick={ChangeClick}>
          {click ? <FaTimes /> : <FaBars />}
        </IconLogoMobile>
      </NavMenu>
    </>
  );
};

export default Navbar;
