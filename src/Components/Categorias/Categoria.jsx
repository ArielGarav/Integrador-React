import React from "react";

import { BorderDecoration, CardCategoria } from "./CategoriasStyles";
import { LILinks, UlLinks, NavLink } from "../Navbar/NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";

export const Categoria = ({ category }) => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const dispatch = useDispatch();

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <UlLinks>
        <LILinks>
          <NavLink> {category}</NavLink>
        </LILinks>
      </UlLinks>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
