import About from "@/components/about";
import Aims from "@/components/aim";
import Hero from "@/components/hero";
import Offer from "@/components/offer";
import Reach from "@/components/reach";
import Why from "@/components/why";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Aims />
      <Offer />
      <About />
      <Why />
      <Reach />
    </>
  );
};

export default HomePage;
