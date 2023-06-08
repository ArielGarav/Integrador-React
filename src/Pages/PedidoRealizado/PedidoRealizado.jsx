import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
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
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
      />
      <TextStyled>
        <img
          src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129349/Colores%20Integrador%20React/Pedido%20Realizado%20Imagenes/success-200x200.jpg.pagespeed.ce.S2kJWBbCGK-removebg-preview_gw1wlt.png"
          alt=""
        />
        <ContainerInfoStyled>
          <TitleStyled>!</TitleStyled>
          <p>Your request was Made</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate("/Jump")}>Go Back</Button>
      </TextStyled>
    </div>
  );
};

export default PedidoRealizado;
