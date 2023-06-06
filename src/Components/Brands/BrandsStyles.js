import styled from "styled-components";
export const TotalBrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 40px;
  margin-top: 100px;
`;
export const BrandWorkedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const TextNike = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #a7a7a7;
  text-align: center;
`;
export const NikeImgBrand = styled.img`
  width: 400px;
  height: 300px;
  @media (width <805px) {
    width: 280px;
  }
`;
export const BrandsImg = styled.img`
  width: 150px;
  height: 130px;
`;

export const ComingSoon = styled.h2`
  font-size: 42px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const ContainerCommingSoon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 25px;
  @media (width <805px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;
