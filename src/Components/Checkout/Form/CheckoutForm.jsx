import React from "react";

import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import { CheckoutDatosStyled, Formik, Form } from "./CheckoutFormStyles";
import { checkoutInitialValues } from "../../../formik/initialValues";
import { checkoutValidationSchema } from "../../../formik/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createOrder } from "../../../axios/axios-orders";
import { clearCart } from "../../../redux/cart/cartSlice";
import Loader from "../../UI/Loader/Loader";

const CheckoutForm = ({ cartItems, shippingCost, precio, setLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <CheckoutDatosStyled>
      <h2>Enter your data</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const orderData = {
            items: cartItems,
            price: precio,
            shippingCost,
            total: precio + shippingCost,
            shippingDetails: { ...values },
          };
          setLoading(true);

          try {
            await createOrder(orderData, currentUser, dispatch);
            // setLoading(false);

            // navigate("/PedidoRealizado");

            // dispatch(clearCart());
            setLoading(true);
          } catch (error) {
            // setLoading(true);

            alert("Order Error");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              htmlFor="nombre"
              name="name"
              type="text"
              id="nombre"
              placeholder="Your name"
            >
              Nombre
            </Input>
            <Input
              htmlFor="celular"
              type="text"
              name="cellphone"
              id="celular"
              placeholder="Your cellphone
              "
            >
              Celular
            </Input>
            <Input
              htmlFor="localidad"
              type="text"
              name="location"
              id="localidad"
              placeholder="your town"
            >
              Localidad
            </Input>
            <Input
              htmlFor="direccion"
              type="text"
              name="address"
              id="dirección"
              placeholder="Your address"
            >
              Dirección
            </Input>
            <div>
              <Submit disabled={!cartItems.length}>
                {isSubmitting ? <Loader /> : "Start Order"}
              </Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
