import React from "react";
import {
  Close,
  ContainerImageProductGallery,
  Exibicion,
  ImageContainer,
  ImageProductGallery,
  ImageProductGalleryFirst,
  LightBox,
  Next,
} from "./HomeCenterStyles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const HomeCenter = () => {
  return (
    <Exibicion>
      <ImageContainer>
        <ContainerImageProductGallery>
          <a href="#image1">
            <ImageProductGalleryFirst
              src="/src/assets/Nike Air Max Plus III/1.jpg"
              alt=""
            />
          </a>
        </ContainerImageProductGallery>
        <ContainerImageProductGallery>
          <a href="#image2">
            <ImageProductGallery
              src="/src/assets/Nike Air Max Plus III/2.jpg"
              alt=""
            />
          </a>
          <a href="#image3">
            <ImageProductGallery
              src="/src/assets/Nike Air Max Plus III/3.jpg"
              alt=""
            />
          </a>
          <a href="#image4">
            <ImageProductGallery
              src="/src/assets/Nike Air Max Plus III/4.jpg"
              alt=""
            />
          </a>
          <a href="#image5">
            <ImageProductGallery
              src="/src/assets/Nike Air Max Plus III/5.jpg"
              alt=""
            />
          </a>
        </ContainerImageProductGallery>
        <LightBox id="image1">
          <Next href="#image5" className="next">
            <FaArrowLeft />
          </Next>
          <ImageProductGallery
            src="/src/assets/Nike Air Max Plus III/1.jpg"
            alt=""
          />
          <Next href="#image2" className="next">
            <FaArrowRight />
          </Next>
          <Close href="" className="close">
            <AiOutlineCloseCircle />
          </Close>
        </LightBox>
        <LightBox id="image2">
          <Next href="#image1" className="next">
            <FaArrowLeft />
          </Next>
          <ImageProductGallery
            src="/src/assets/Nike Air Max Plus III/2.jpg"
            alt=""
          />
          <Next href="#image3" className="next">
            <FaArrowRight />
          </Next>
          <Close href="" className="close">
            <AiOutlineCloseCircle />
          </Close>
        </LightBox>
        <LightBox id="image3">
          <Next href="#image2" className="next">
            <FaArrowLeft />
          </Next>
          <ImageProductGallery
            src="/src/assets/Nike Air Max Plus III/3.jpg"
            alt=""
          />
          <Next href="#image4" className="next">
            <FaArrowRight />
          </Next>
          <Close href="" className="close">
            <AiOutlineCloseCircle />
          </Close>
        </LightBox>
        <LightBox id="image4">
          <Next href="#image3" className="next">
            <FaArrowLeft />
          </Next>
          <ImageProductGallery
            src="/src/assets/Nike Air Max Plus III/4.jpg"
            alt=""
          />
          <Next href="#image5" className="next">
            <FaArrowRight />
          </Next>
          <Close href="" className="close">
            <AiOutlineCloseCircle />
          </Close>
        </LightBox>
        <LightBox id="image5">
          <Next href="#image4" class="next">
            <FaArrowLeft />
          </Next>
          <ImageProductGallery
            src="/src/assets/Nike Air Max Plus III/5.jpg"
            alt=""
          />
          <Next href="#image1" class="next">
            <FaArrowRight />
          </Next>
          <Close href="" class="close">
            <AiOutlineCloseCircle />
          </Close>
        </LightBox>
      </ImageContainer>
    </Exibicion>
  );
};

export default HomeCenter;
