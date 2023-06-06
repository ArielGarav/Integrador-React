import React from "react";
import {
  DatosContainer,
  PuntuacionContainer,
  TextNikeAir,
  SizeContainer,
  ButtonIzqContainer,
} from "./HomeIzqStyles";
import { Link } from "react-router-dom";
import StarRating from "../../StartRating/StartRating";

const HomeIzq = () => {
  return (
    <DatosContainer>
      <h2>179.99 $</h2>
      <h1>Nike Air Max Plus III</h1>
      <PuntuacionContainer>
        <p>Men's Shoes</p>
        <StarRating />
      </PuntuacionContainer>
      <hr />
      <TextNikeAir>
        Con la misma tecnología Tuned Air que sus predecesoras, las Nike Air Max
        Plus III actualizan el diseño con detalles de plástico fusionado en la
        parte superior y rinden homenaje a la icónica coloración degradada de
        las originales.
      </TextNikeAir>
      <SizeContainer>
        <p>Tamaños Disponibles </p>
      </SizeContainer>
      <div>
        <p> 35 - 36 - 37 - 38 - 39 - 40 - 41 - 42</p>
      </div>
      <Link to="Jump">
        <ButtonIzqContainer>Comprar</ButtonIzqContainer>
      </Link>
    </DatosContainer>
  );
};

export default HomeIzq;
