import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyles/GlobalStyles.js";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Asegúrate de importar la hoja de estilos de react-toastify

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
