import React from "react";
import { tour } from "../data";
const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tour.map((tourItem) => {
        const { id,image,date,title, text, icon,country, duration, expense,} = tourItem;
        return (
          <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className={icon}></i>
                  </span>{" "}
                  {country}
                </p>
                <p>{duration}</p>
                <p>{expense}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tour;
