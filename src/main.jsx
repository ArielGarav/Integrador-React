import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyles/GlobalStyles.js";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
