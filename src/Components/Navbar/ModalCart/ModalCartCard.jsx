import React from "react";
import { formatPrice } from "../../../utils/formatPrice";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import Count from "../../UI/Count/Count";
import Increase from "../../UI/Increase/Increase";

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from "./ModalCartStyles";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../../redux/cart/cartSlice";
import { IoMdTrash } from "react-icons/io";

const ModalCartCard = ({ img, nombre, precio, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
      <img src={img} alt={nombre} />
      <TextContainerStyled>
        <CardTitleStyled>{nombre}</CardTitleStyled>
        <PriceStyled>{formatPrice(precio)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase bgColor="black" onClick={() => dispatch(removeToCart(id))}>
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          onClick={() =>
            dispatch(addToCart({ img, nombre, precio, quantity, id }))
          }
        >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
