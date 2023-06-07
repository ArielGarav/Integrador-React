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
          src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129349/Colores%20Integrador%20React/Pedido%20Realizado%20Imagenes/success-200x200.jpg.pagespeed.ce.S2kJWBbCGK-removebg-preview_gw1wlt.png"
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
