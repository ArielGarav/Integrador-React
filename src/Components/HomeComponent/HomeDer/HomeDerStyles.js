import styled from "styled-components";

export const RecommendationContainer = styled.section`
  display: flex;
  gap: 20px;
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const SimilarImage = styled.img`
  width: 140px;
  height: 140px;
  @media (max-width: 550px) {
    width: 100px;
    height: 140px;
  }
`;

export const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  width: 350px;
  @media (max-width: 550px) {
    width: 250px;
    padding: 0px;
  }
`;

export const SuggestionHeading = styled.h2`
  font-size: 32px;
`;

export const SuggestionSubheading = styled.h3`
  font-size: 24px;
`;

export const SuggestionText = styled.p`
  font-size: 24px;
`;

export const ColorContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  gap: 40px;
`;

export const ColorImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 2000px;
`;

export const SuggestionDescription = styled.h4`
  font-size: 20px;
  padding-top: 20px;
`;

export const LineEdit = styled.hr`
  display: none;
`;
