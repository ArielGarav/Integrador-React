import React from "react";
import CardsProductos from "../Productos/CardsProductos";
import CardsRecomendaciones from "../Recomendados/CardsRecomendaciones";
import Categorias from "../Categorias/Categorias";

const Shop = () => {
  return (
    <>
      <CardsRecomendaciones />

      <Categorias />
      <CardsProductos />
    </>
  );
};

export default Shop;
