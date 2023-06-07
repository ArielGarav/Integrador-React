import styled from "styled-components";

export const CardContainerStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 100px;
  flex-wrap: wrap;
`;

export const CardAvailable = styled.div`
  position: relative;
  min-width: 300px;
  height: 480px;
  background: #ffce00;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid white;

  &::before {
    content: "";
    position: absolute;
    top: 22%;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #191919;
    transform: skewY(345deg);
    transition: 0.5s;
  }

  &:hover::before {
    top: 100%;
    transform: skewY(390deg);
  }

  &::after {
    content: "/////////////////////////////////";
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 6em;
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const ContentBox = styled.div`
  position: relative;
  display: flex;
  gap: 11px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

export const TextCard = styled.h3`
  font-size: 16px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Price = styled.div`
  font-size: 24px;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const CardButtonBuy = styled.button`
  position: relative;
  top: 100px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: #000000;
  text-decoration: none;
  background: white;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.5s;

  ${CardAvailable}:hover & {
    top: 0;
    opacity: 1;
  }
  .no-hover:hover {
    cursor: default;

    /* Additional styles to remove the hover effect */
  }
`;

export const ButtonProducts = styled.button`
  background: none;
  border: 1px solid #f0fbff;
  padding: 10px 35px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;
export const ButtonProductsContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 3rem;

  @media (width <540px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleProdyCat = styled.h1`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-top: 15px;
`;
