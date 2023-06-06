import React from "react";
import HomeIzq from "../../Components/HomeComponent/Homeizq/HomeIzq";
import HomeCenter from "../../Components/HomeComponent/HomeCenter/HomeCenter";
import { HomeContainer } from "./HomeStyles";
import HomeDer from "../../Components/HomeComponent/HomeDer/HomeDer";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeIzq />
        <HomeCenter />
        <HomeDer />
      </HomeContainer>
    </>
  );
};

export default Home;
