import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CardAvailable,
  ImgBox,
  ContentBox,
  TextCard,
  Price,
  CardButtonBuy,
  Image,
} from "./CardProductStyles";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

const CardProducto = ({ img, nombre, precio, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer />
      <CardAvailable>
        <ImgBox>
          <Image src={img} alt={nombre} />
        </ImgBox>
        <ContentBox>
          <TextCard>{nombre}</TextCard>
          <Price>{formatPrice(precio)}</Price>
          <CardButtonBuy
            onClick={() => {
              dispatch(addToCart({ img, nombre, precio, id }));
              toast.success("¡Producto agregado al carrito!");
            }}
          >
            Agregar
          </CardButtonBuy>
        </ContentBox>
      </CardAvailable>
    </>
  );
};

export default CardProducto;
