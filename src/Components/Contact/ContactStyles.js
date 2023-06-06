import styled from "styled-components";
export const TotalContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  height: 80vh;
  width: 100%;
`;
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  @media (width <560px) {
    gap: 15px;
    flex-direction: column;
  }
`;
export const ComuncationTextContact = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;
export const TextContact = styled.h3`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

export const LinksStlyedRedes = styled.a`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
