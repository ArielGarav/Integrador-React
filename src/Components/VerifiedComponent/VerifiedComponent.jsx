import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";

import {
  IconWrapperStyled,
  VerifiedComponentContainerStyled,
  VerifiedComponentFormStyled,
  VerifiedComponentDeniedContainer,
  VerifiedComponentText,
} from "./VerifiedComponentStyles";
import { useNavigate } from "react-router-dom";

const VerifiedComponent = ({ doScroll }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  return (
    <VerifiedComponentContainerStyled>
      <div>
        {currentUser?.verified ? (
          <h1>Bienvenido Usuario Verificado</h1>
        ) : (
          <VerifiedComponentDeniedContainer>
            <VerifiedComponentText>
              Tenes que validar tu cuenta
            </VerifiedComponentText>
            <VerifiedComponentFormStyled>
              <Button
                onClick={() => {
                  navigate("/validate");
                }}
                radius="10"
              >
                Validar usuario
              </Button>
            </VerifiedComponentFormStyled>
          </VerifiedComponentDeniedContainer>
        )}
      </div>
    </VerifiedComponentContainerStyled>
  );
};

export default VerifiedComponent;
