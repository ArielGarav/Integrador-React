import { Route, Routes as ReactDomRoutes } from "react-router";
import About from "../Components/About/About";
import Brands from "../Components/Brands/Brands";
import Contact from "../Components/Contact/Contact";
import Layout from "../Components/Layout/Layout";
import Error404 from "../Components/Error404/Error404";
import Home from "../Pages/Home/Home";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import PedidoRealizado from "../Pages/PedidoRealizado/PedidoRealizado.jsx";
import Shop from "../Components/Shop/Shop";

function Routes() {
  return (
    <>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Brands" element={<Brands />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Jump" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/PedidoRealizado" element={<PedidoRealizado />} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute redirectTo="/register">
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error404 />}></Route>
        </ReactDomRoutes>
      </Layout>
    </>
  );
}
export default Routes;
