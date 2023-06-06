import React from "react";
import {
  BrandsImg,
  ComingSoon,
  ContainerCommingSoon,
  BrandWorkedContainer,
  TextNike,
  TotalBrandContainer,
  NikeImgBrand,
} from "./BrandsStyles";

const Brands = () => {
  return (
    <>
      <TotalBrandContainer>
        <BrandWorkedContainer>
          <NikeImgBrand
            src=" /src/Components/Brands/LogoBrandsImages/Nike.png"
            alt="Nike"
          />
        </BrandWorkedContainer>
        <TextNike>
          En estos momentos, nuestra empresa mantiene una relación de trabajo
          únicamente con la marca Nike.
        </TextNike>

        <ContainerCommingSoon>
          <ComingSoon>Coming soon</ComingSoon>

          <BrandsImg
            src="/src/Components/Brands/LogoBrandsImages/Jordan.png"
            alt="Jordan"
          />
          <BrandsImg
            src="/src/Components/Brands/LogoBrandsImages/Adidas.png"
            alt="Adidas"
          />
          <BrandsImg
            src="/src/Components/Brands/LogoBrandsImages/Fila.png"
            alt="Fila"
          />
        </ContainerCommingSoon>
      </TotalBrandContainer>
    </>
  );
};

export default Brands;
