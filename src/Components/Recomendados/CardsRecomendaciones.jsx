import React from "react";
import { CardRecommendedContainerStyled } from "./CardsRecomendacionesStyles";
import CardRecomendaciones from "../Recomendados/CardRecomendaciones";
import { useSelector } from "react-redux";
import { TitleProdyCat } from "../Productos/CardProductStyles";

const CardsRecomendaciones = () => {
  const recommended = useSelector((state) => state.recommended.recommended);
  return (
    <>
      <TitleProdyCat>Recomendaciones</TitleProdyCat>
      <CardRecommendedContainerStyled>
        {recommended.map((product) => (
          <CardRecomendaciones key={product.id} {...product} />
        ))}
      </CardRecommendedContainerStyled>
    </>
  );
};

export default CardsRecomendaciones;
