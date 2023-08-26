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

import {
  FaUserAlt,
  FaHome,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleHiddenMenu } from "../../redux/user/userSlice";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click, setclick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const ChangeClick = () => {
    setclick(!click);
  };

  const handleMenuToggle = () => {
    setclick(!click);
  };

  const checkIsMobile = () => {
    const mobileDevice =
      typeof window !== "undefined" && window.innerWidth <= 1310;
    setIsMobile(mobileDevice);
  };

  const handleLogout = () => {
    // Aquí debes implementar la lógica de logout, por ejemplo:
    // dispatch(logoutUser()); // Supongamos que tienes una acción para realizar el logout
    // navigate("/login"); // Redirige al usuario a la página de inicio de sesión
    dispatch(setCurrentUser(null));
    console.log("Usuario desconectado");
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

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
              {currentUser && isMobile && (
                <LILinks>
                  <NavLink onClick={handleLogout}>
                    <FaSignOutAlt />
                  </NavLink>
                </LILinks>
              )}

              <LILinks>
                <UserContainerStyled
                  onClick={() =>
                    currentUser
                      ? dispatch(toggleHiddenMenu())
                      : navigate("/register")
                  }
                >
                  <SpanUserNavStyled>
                    {currentUser ? `${currentUser.nombre}` : "Login"}
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
