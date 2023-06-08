import React from "react";
import {
  Card,
  ContainerPopu,
  ImgBx,
  Image,
  ContentBx,
  H2,
  Prices,
  H3,
  Button,
  H4,
} from "./CardsRecomendacionesStyles";
import { formatPrice } from "../../utils/formatPrice";

const CardRecomendaciones = ({ nombre, precio, img }) => {
  return (
    <ContainerPopu>
      <Card>
        <ImgBx>
          <Image src={img} alt={nombre} />
        </ImgBx>
        <ContentBx>
          <H2>{nombre}</H2>
          <Prices>
            <H3>Price :</H3>
            <H4>{formatPrice(precio)} </H4>
          </Prices>
        </ContentBx>
      </Card>
    </ContainerPopu>
  );
};

export default CardRecomendaciones;
