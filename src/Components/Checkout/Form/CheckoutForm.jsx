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

const CheckoutForm = ({ cartItems, shippingCost, precio }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
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

          try {
            await createOrder(orderData, dispatch, currentUser);
            navigate("/PedidoRealizado");
            dispatch(clearCart());
          } catch (error) {
            alert("Error en la orden");
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
              placeholder="Tu nombre"
            >
              Nombre
            </Input>
            <Input
              htmlFor="celular"
              type="text"
              name="cellphone"
              id="celular"
              placeholder="Tu celular"
            >
              Celular
            </Input>
            <Input
              htmlFor="localidad"
              type="text"
              name="location"
              id="localidad"
              placeholder="Tu localidad"
            >
              Localidad
            </Input>
            <Input
              htmlFor="direccion"
              type="text"
              name="address"
              id="dirección"
              placeholder="Tu dirección"
            >
              Dirección
            </Input>
            <div>
              <Submit disabled={!cartItems.length}>
                {isSubmitting ? <Loader /> : "Iniciar Pedido"}
              </Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
