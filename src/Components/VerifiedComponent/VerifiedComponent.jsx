import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";

import {
  IconWrapperStyled,
  VerifiedComponentContainerStyled,
  VerifiedComponentFormStyled,
  VerifiedComponentDeniedContainer,
  VerifiedComponentAcceptContainer,
  VerifiedComponentText,
} from "./VerifiedComponentStyles";
import { useNavigate } from "react-router-dom";

const VerifiedComponent = ({ doScroll }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  return (
    <VerifiedComponentContainerStyled>
      <VerifiedComponentAcceptContainer>
        {currentUser?.verified ? (
          <VerifiedComponentText>
            Bienvenido Usuario Verificado
          </VerifiedComponentText>
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
      </VerifiedComponentAcceptContainer>
    </VerifiedComponentContainerStyled>
  );
};

export default VerifiedComponent;
