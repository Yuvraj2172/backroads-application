import React from "react";
import Title from "./Title";
import Tour from "./Tour";
import { tour } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />      
      <Tour/>
    </section>
  );
};

export default Tours;
