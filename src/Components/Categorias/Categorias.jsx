import React from "react";

import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";

import { useSelector } from "react-redux";
import { TitleProdyCat } from "../Productos/CardProductStyles";

const Categorias = () => {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <>
      <hr />
      <TitleProdyCat>Selecciona tu Categoria</TitleProdyCat>
      <CategoriasContainer>
        {categories.map((category) => (
          <Categoria key={category.id} {...category} />
        ))}
      </CategoriasContainer>
    </>
  );
};

export default Categorias;
