import { formatPrice } from "../../utils";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import Count from "../UI/Count/Count";
import Increase from "../UI/Increase/Increase";

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  QuantityContainerStyled,
} from "./CardProductCheckoutStyles";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../redux/cart/cartSlice";
import { IoMdTrash } from "react-icons/io";

const CardProductCheckout = ({ img, nombre, precio, quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <CardContainerStyled>
      <img src={img} alt={nombre} />
      <CardInfoStyled>
        <ProductTitleStyled>{nombre}</ProductTitleStyled>
        <PriceStyled>{formatPrice(precio)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor="var(--btn-gradient-secondary)"
          onClick={() => dispatch(removeToCart(id))}
        >
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
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
