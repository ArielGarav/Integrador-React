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
          src="src/assets/sugerencias/Men's Jordan 1 Mid/1.jpg"
          alt=""
        />
        <SimilarImage
          src="src/assets/sugerencias/Men's Jordan 1 Mid/2.jpg"
          alt=""
        />
        <SimilarImage
          src="src/assets/sugerencias/Men's Jordan 1 Mid/3.jpg"
          alt=""
        />
      </Slider>
      <SuggestionContainer>
        <SuggestionHeading>Sugerencias</SuggestionHeading>
        <SuggestionText>129,99$</SuggestionText>
        <SuggestionSubheading>Men's Jordan 1 Mid</SuggestionSubheading>
        <hr />
        <SuggestionSubheading>Colores Disponibles</SuggestionSubheading>
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
          Inspiradas en las AJ1 originales, las Air Jordan 1 Mid ofrecen a los
          aficionados la oportunidad de seguir los pasos de MJ. El nuevo color
          ribetea los materiales clásicos e infunde modernidad a un diseño
          clásico.
        </SuggestionDescription>
        <Link to="Jump">
          <ButtonIzqContainer>Más</ButtonIzqContainer>
        </Link>
      </SuggestionContainer>
      <LineEdit />
    </RecommendationContainer>
  );
};

export default HomeDer;
