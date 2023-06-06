import React from "react";

import { ContainerCheckoutStyled } from "./CheckoutStyles";
import { useSelector } from "react-redux";
import ProductsCheckout from "../../Components/Checkout/Products/ProductsCheckout";
import CheckoutForm from "../../Components/Checkout/Form/CheckoutForm";

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.precio * item.quantity),
    0
  );

  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          precio={totalPrice}
        />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          precio={totalPrice}
        />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
