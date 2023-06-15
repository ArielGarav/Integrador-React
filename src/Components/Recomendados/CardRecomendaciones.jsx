import React from "react";
import {
  Card,
  ContainerPopu,
  ImgBx,
  Image,
  ContentBx,
  H2,
  Prices,
  H3,
  Button,
  H4,
} from "./CardsRecomendacionesStyles";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../redux/cart/cartSlice";
import { toast } from "react-toastify";

const CardRecomendaciones = ({ nombre, precio, img, id }) => {
  const dispatch = useDispatch();

  return (
    <ContainerPopu>
      <Card>
        <ImgBx>
          <Image src={img} alt={nombre} />
        </ImgBx>
        <ContentBx>
          <H2>{nombre}</H2>
          <Prices>
            <H3>Price :</H3>
            <H4>{formatPrice(precio)} </H4>
          </Prices>
          <Button
            onClick={() => {
              dispatch(addToCart({ img, nombre, precio, id }));
              toast.success("¡Product added to cart!");
            }}
          >
            Add To Cart <FaShoppingCart />
          </Button>
        </ContentBx>
      </Card>
    </ContainerPopu>
  );
};

export default CardRecomendaciones;
