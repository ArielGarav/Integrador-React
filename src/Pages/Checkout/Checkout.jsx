import React, { useState } from "react";
import { ContainerCheckoutStyled } from "./CheckoutStyles";
import { useSelector } from "react-redux";
import ProductsCheckout from "../../Components/Checkout/Products/ProductsCheckout";
import CheckoutForm from "../../Components/Checkout/Form/CheckoutForm";
import AnimatedCircles from "../../Components/UI/Loader/LoaderBuy/AnimatedCircles";

const Checkout = () => {
  const [loading, setLoading] = useState(false); // Cambié Loading a loading
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.precio * item.quantity),
    0
  );

  return (
    <div>
      {loading ? (
        <AnimatedCircles />
      ) : (
        <ContainerCheckoutStyled>
          <CheckoutForm
            cartItems={cartItems}
            shippingCost={shippingCost}
            precio={totalPrice}
            setLoading={setLoading} // Pasa setLoading como prop
          />
          <ProductsCheckout
            cartItems={cartItems}
            shippingCost={shippingCost}
            precio={totalPrice}
          />
        </ContainerCheckoutStyled>
      )}
    </div>
  );
};

export default Checkout;
