import React from "react";

import { FaShoppingCart } from "react-icons/fa";

import { LinkContainenIconoCart } from "./../NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../redux/cart/cartSlice";

const CartIcon = () => {
  const dispatch = useDispatch();
  const totalCartItemsQuantity = useSelector(
    (state) => state.cart.cartItems
  ).reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <LinkContainenIconoCart onClick={() => dispatch(toggleHiddenCart())}>
      <FaShoppingCart />
      <span>{totalCartItemsQuantity}</span>
    </LinkContainenIconoCart>
  );
};

export default CartIcon;
