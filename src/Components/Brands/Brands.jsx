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
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129645/LogoBrandsImages/Nike_ol7vri.png"
            alt="Nike"
          />
        </BrandWorkedContainer>
        <TextNike>
          At this time, our company maintains a working relationship only with
          the Nike brand.
        </TextNike>

        <ContainerCommingSoon>
          <ComingSoon>Coming soon</ComingSoon>

          <BrandsImg
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129646/LogoBrandsImages/Jordan_haipfj.png"
            alt="Jordan"
          />
          <BrandsImg
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129646/LogoBrandsImages/Adidas_fznjmj.png"
            alt="Adidas"
          />
          <BrandsImg
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129646/LogoBrandsImages/Fila_vzdcwr.png"
            alt="Fila"
          />
        </ContainerCommingSoon>
      </TotalBrandContainer>
    </>
  );
};

export default Brands;
