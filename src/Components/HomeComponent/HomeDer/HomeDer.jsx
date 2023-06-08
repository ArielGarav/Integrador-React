import React from "react";
import {
  RecommendationContainer,
  Slider,
  SimilarImage,
  SuggestionContainer,
  SuggestionHeading,
  SuggestionSubheading,
  SuggestionText,
  ColorContainer,
  ColorImage,
  SuggestionDescription,
  LineEdit,
} from "./HomeDerStyles";
import { ButtonIzqContainer } from "../Homeizq/HomeIzqStyles";
import { Link } from "react-router-dom";
const HomeDer = () => {
  return (
    <RecommendationContainer>
      <Slider>
        <SimilarImage
          src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686128972/Colores%20Integrador%20React/Sugerencia%20imagenes/1_eshspe.png"
          alt=""
        />
        <SimilarImage
          src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686128973/Colores%20Integrador%20React/Sugerencia%20imagenes/2_ebqy0o.png"
          alt=""
        />
        <SimilarImage
          src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686128973/Colores%20Integrador%20React/Sugerencia%20imagenes/3_lwp3v5.png"
          alt=""
        />
      </Slider>
      <SuggestionContainer>
        <SuggestionHeading>Suggestions</SuggestionHeading>
        <SuggestionText>129,99$</SuggestionText>
        <SuggestionSubheading>Men's Jordan 1 Mid</SuggestionSubheading>
        <hr />
        <SuggestionSubheading>Available Colours</SuggestionSubheading>
        <ColorContainer>
          <ColorImage
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686128718/Colores%20Integrador%20React/rojo_gdhvbp.jpg"
            alt=" color rojo"
          />
          <ColorImage
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686128718/Colores%20Integrador%20React/gris_yzbgeb.png"
            alt=" color gris"
          />
          <ColorImage
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686128718/Colores%20Integrador%20React/blanco_x2spo1.png"
            alt="color blanco"
          />
        </ColorContainer>
        <hr />
        <SuggestionDescription>
          Inspired by the original AJ1s, the Air Jordan 1 Mid offers fans the
          opportunity to follow in MJ's footsteps. The new colorway trims the
          classic materials and infuses modernity into a timeless design.
        </SuggestionDescription>
        <Link to="Jump">
          <ButtonIzqContainer>More</ButtonIzqContainer>
        </Link>
      </SuggestionContainer>
      <LineEdit />
    </RecommendationContainer>
  );
};

export default HomeDer;
