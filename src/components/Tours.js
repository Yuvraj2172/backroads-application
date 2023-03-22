import React from "react";
import Title from "./Title";
import Tour from "./Tour";
import { tour } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tour.map((tourItem) => {
          const {
            id,
            image,
            date,
            title,
            text,
            icon,
            country,
            duration,
            expense,
          } = tourItem;
          return (
            <Tour
              key={id}
              image={image}
              date={date}
              title={title}
              text={text}
              icon={icon}
              country={country}
              duration={duration}
              expense={expense}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
