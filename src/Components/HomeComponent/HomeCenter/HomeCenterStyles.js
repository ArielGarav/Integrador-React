import styled from "styled-components";
export const Exibicion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 50%;
`;
export const ContainerImageProductGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const ImageProductGallery = styled.img`
  width: 100px;
  border-radius: 2rem;
  @media (max-width: 550px) {
    width: 70px;
  }
`;
export const ImageProductGalleryFirst = styled.img`
  width: 350px;
  border-radius: 2rem;
  @media (max-width: 550px) {
    width: 250px;
  }
`;
export const LightBox = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);

  img {
    width: 30vw;
  }
  @media (max-width: 550px) {
    img {
      width: 200px;
    }
  }

  &:target {
    transform: scale(1);
  }
`;
export const Next = styled.a`
  display: block;
  font-size: 4rem;
  color: #fff;
`;
export const Close = styled.a`
  display: block;
  position: absolute;
  top: 100px;
  right: 30rem;
  font-size: 4rem;
  color: #fff;
  @media (max-width: 550px) {
    top: 100px;
    right: 15rem;
  }
  &:hover {
    color: #fcde03;
  }
`;
