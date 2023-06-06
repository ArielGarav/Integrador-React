import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";
import ordersReducer from "./orders/ordersSlice";
import starReducer from "./../redux/Star/starSlice"; // Importa el slice "starSlice"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import recommendedProductsReducer from "./recommended/recommendedProductsSlice";

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedProductsReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
  star: starReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user", "star"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
