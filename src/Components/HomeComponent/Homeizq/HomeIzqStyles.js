import styled from "styled-components";
export const DatosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  @media (width <1344px) {
    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 1300px;
  }
  & h2 {
    font-size: clamp(26px, 2vw, 32px);
  }
  & h1 {
    font-size: clamp(30px, 2vw, 40px);
  }
`;
export const PuntuacionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  & p {
    font-size: 26px;
  }
`;
export const TextNikeAir = styled.p`
  font-size: clamp(20px, 1vw, 26px);
`;

export const SizeContainer = styled.div`
  display: flex;
  gap: 15px;
`;
export const ButtonIzqContainer = styled.button`
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background-color: #191a1a;
  border-radius: 6px;
  border: 1px solid #ffffff;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 18px;
  text-decoration: none;
  text-shadow: 0px 0px 50px #2b665e;
  width: 150px;

  &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }

  &.cart-it {
    position: relative;
    top: 1px;
  }
`;
