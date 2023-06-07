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
              src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129127/Colores%20Integrador%20React/galleria%20nike%20home/1_j7iuee.png"
              alt=""
            />
          </a>
        </ContainerImageProductGallery>
        <ContainerImageProductGallery>
          <a href="#image2">
            <ImageProductGallery
              src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129126/Colores%20Integrador%20React/galleria%20nike%20home/2_uvq0hv.png"
              alt=""
            />
          </a>
          <a href="#image3">
            <ImageProductGallery
              src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129127/Colores%20Integrador%20React/galleria%20nike%20home/3_w1eg8p.png"
              alt=""
            />
          </a>
          <a href="#image4">
            <ImageProductGallery
              src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129128/Colores%20Integrador%20React/galleria%20nike%20home/4_w0vgpb.png"
              alt=""
            />
          </a>
          <a href="#image5">
            <ImageProductGallery
              src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129128/Colores%20Integrador%20React/galleria%20nike%20home/5_qpjvmq.png"
              alt=""
            />
          </a>
        </ContainerImageProductGallery>
        <LightBox id="image1">
          <Next href="#image5" className="next">
            <FaArrowLeft />
          </Next>
          <ImageProductGallery
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129126/Colores%20Integrador%20React/galleria%20nike%20home/2_uvq0hv.png"
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
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129126/Colores%20Integrador%20React/galleria%20nike%20home/2_uvq0hv.png"
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
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129127/Colores%20Integrador%20React/galleria%20nike%20home/3_w1eg8p.png"
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
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129128/Colores%20Integrador%20React/galleria%20nike%20home/4_w0vgpb.png"
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
            src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686129128/Colores%20Integrador%20React/galleria%20nike%20home/5_qpjvmq.png"
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
