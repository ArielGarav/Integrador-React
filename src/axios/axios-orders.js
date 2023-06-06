import axios from "axios";
import {
  createOrderFail,
  fetchOrderFail,
  fetchOrderStart,
  fetchOrderSuccess,
} from "../redux/orders/ordersSlice";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrderStart());

  try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (orders) {
      dispatch(fetchOrderSuccess(orders.data.data));
    }
  } catch (error) {
    console.error({ error });
    dispatch(
      fetchOrderFail("Oops, algo salío mal. No hay ordenes sin usuario.")
    );
  }
};

export const createOrder = async (order, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (error) {
    dispatch(createOrderFail());
  }
};
