import React from "react";
import { formatPrice } from "../../../utils";

import CardProductCheckout from "../../CardProductCheckout/CardProductCheckout";

import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  SubtotalStyled,
  EnvioStyled,
  HrStyled,
  TotalStyled,
  PriceTotalStyled,
} from "./ProductsCheckoutStyles";

const ProductsCheckout = ({ cartItems, shippingCost, precio }) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Your order</ProductsTitleStyled>
      <CardsWrapperStyled>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CardProductCheckout key={item.id} {...item} />
          ))
        ) : (
          <p>You have no Products</p>
        )}
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(precio)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Shipment:</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>
            {formatPrice(precio + shippingCost)}
          </PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;
