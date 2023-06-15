import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 40px;
  margin-top: 40px;

  @media (max-width: 805px) {
    flex-direction: column;
    gap: 20px;
    align-items: start;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

export const SectionAbout = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  min-width: 300px;
  gap: 10px;
`;

export const SectionContact = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 10px;
  min-width: 300px;
`;

export const Line = styled.div`
  width: 2px;
  height: 200px;
  background-color: white;
  margin: 0 20px;
  @media (max-width: 805px) {
    display: flex;
  }
`;
export const CommunicationLinks = styled(Link)`
  color: #ffff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    color: #ffce00;
  }
`;
export const Title = styled.h2`
  font-size: 30px;
`;

export const Text = styled.p`
  width: 60%;
`;
