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
      <h2>$179.99 </h2>
      <h1>Nike Air Max Plus III</h1>
      <PuntuacionContainer>
        <p>Men's Shoes</p>
        <StarRating />
      </PuntuacionContainer>
      <hr />
      <TextNikeAir>
        With the same Tuned Air technology as their predecessors, the Nike Air
        Max Plus III updates the design with fused plastic details on the upper
        and pays homage to the iconic gradient colorway of the originals.
      </TextNikeAir>
      <SizeContainer>
        <p> Available Sizes </p>
      </SizeContainer>
      <div>
        <p> 35 - 36 - 37 - 38 - 39 - 40 - 41 - 42</p>
      </div>
      <Link to="Jump">
        <ButtonIzqContainer>Buy</ButtonIzqContainer>
      </Link>
    </DatosContainer>
  );
};

export default HomeIzq;
