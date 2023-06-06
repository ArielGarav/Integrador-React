import React from "react";
import { TextError404, TotalError404Container } from "./Error404Styles";

const Error404 = () => {
  return (
    <TotalError404Container>
      <TextError404>Error 404 Not Found</TextError404>
    </TotalError404Container>
  );
};

export default Error404;
