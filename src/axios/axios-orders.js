import axios from "axios";
import {
  createOrderFail,
  fetchOrderFail,
  fetchOrderStart,
  fetchOrderSuccess,
} from "../redux/orders/ordersSlice";
import { BASE_URL } from "../utils";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrderStart());

  try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (orders) {
      console.log("funca manito");
      dispatch(fetchOrderSuccess(orders.data.data));
    }
  } catch (error) {
    console.error({ error });
    dispatch(
      fetchOrderFail("Oops, algo salío mal. No hay ordenes sin usuario.")
    );
  }
};

export const createOrder = async (order, currentUser, dispatch) => {
  console.log(order);
  try {
    const response = await axios.post(
      `${BASE_URL}/orders`,

      order,
      {
        headers: {
          "x-token": currentUser.token,
        },
      }
    );
    if (response) {
      getOrders(dispatch, currentUser);
      console.log(response);
    }
  } catch (error) {
    console.log(error);
    dispatch(createOrderFail());
  }
};
