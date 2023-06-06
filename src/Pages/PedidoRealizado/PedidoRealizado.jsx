import { useNavigate } from "react-router-dom";

import Button from "../../Components/UI/Button/Button";

import {
  ContainerInfoStyled,
  TextStyled,
  TitleStyled,
} from "./PedidoRealizado";

const PedidoRealizado = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src="/src/assets/iconos/success-200x200.jpg.pagespeed.ce.S2kJWBbCGK-removebg-preview.png"
          alt=""
        />
        <ContainerInfoStyled>
          <TitleStyled>!</TitleStyled>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate("/Jump")}>Volver</Button>
      </TextStyled>
    </div>
  );
};

export default PedidoRealizado;
