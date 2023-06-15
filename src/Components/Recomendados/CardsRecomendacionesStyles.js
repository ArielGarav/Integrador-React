import styled from "styled-components";

export const CardRecommendedContainerStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 100px;
  flex-wrap: wrap;
`;
export const ContainerPopu = styled.div`
  position: relative;
  padding: 20px;
`;

export const Card = styled.div`
  position: relative;
  width: 280px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: yellow;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: "/////";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 25, 0.05);
  }
`;

export const ImgBx = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 100%;
  height: 220px;
  transition: 0.5s;

  ${Card}:hover & {
    top: 0%;
    transform: translateY(0%);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
  width: 270px;
`;

export const ContentBx = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;

  ${Card}:hover & {
    height: 210px;
  }
`;

export const H2 = styled.h2`
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin: 0;
`;

export const Prices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  padding-top: 0;
  padding-bottom: 0;

  ${Card}:hover & {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }
`;

export const H3 = styled.h3`
  color: #fff;
  font-weight: 300;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
  margin-top: 10px;
`;
export const H4 = styled.h4`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 30px;
  background: white;
  border-radius: 30px;
  margin-top: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: 600;
  color: #000000;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }
`;
