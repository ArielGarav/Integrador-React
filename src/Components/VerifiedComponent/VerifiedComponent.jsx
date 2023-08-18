import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";

import {
  IconWrapperStyled,
  VerifiedComponentContainerStyled,
  VerifiedComponentFormStyled,
} from "./VerifiedComponentStyles";
import { useNavigate } from "react-router-dom";

const VerifiedComponent = ({ doScroll }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  return (
    <VerifiedComponentContainerStyled>
      <div>
        {currentUser?.verified ? (
          <h1 className="title">Bienvenido Usuario Verificado</h1>
        ) : (
          <div>
            <h1 className="title">Tenes que validar tu cuenta</h1>
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
          </div>
        )}
      </div>
    </VerifiedComponentContainerStyled>
  );
};

export default VerifiedComponent;
