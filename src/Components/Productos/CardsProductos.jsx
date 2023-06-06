import React, { useEffect, useState } from "react";
import {
  ButtonProducts,
  ButtonProductsContainerStyled,
  CardContainerStyled,
} from "./CardProductStyles";
import { useSelector } from "react-redux";
import CardProducto from "./CardProducto";
import { INITIAL_LIMIT } from "../../utils";

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const totalProducts = useSelector((state) => state.products.totalProducts);

  if (selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory],
    };
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      <CardContainerStyled>
        {Object.entries(products).map(([_categery, foods]) =>
          foods.map((product) => {
            if (limit >= product.id || selectedCategory) {
              return <CardProducto key={product.id} {...product} />;
            } else return null;
          })
        )}
      </CardContainerStyled>

      {!selectedCategory && (
        <ButtonProductsContainerStyled>
          <ButtonProducts
            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            secondary="true"
            disabled={limit === INITIAL_LIMIT}
          >
            <span>Ver menos</span>
          </ButtonProducts>
          <ButtonProducts
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
          >
            Ver más
          </ButtonProducts>
        </ButtonProductsContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
