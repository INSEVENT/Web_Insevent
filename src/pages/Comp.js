import React from "react";
import cardData from "../data/card";

function Competition() {
  const card = cardData[0];

  return (
    <div
      className="sec1 d-flex justify-content-center align-items-center"
      style={{ minHeight: "150vh", fontSize: "16px" }}
    >
      <div className="mt-5">
        <h1>{card.title}</h1>
        <h3 style={{ fontSize: "12px" }}>{card.time}</h3>

        <img
          src={card.imgSrc}
          alt="img"
          style={{ width: "300px", height: "300px" }}
        />
        <div className="m-5 mt-0">
          <p>{card.description}</p>
        </div>
        <div className="text-start ms-5">
          <ul>
            <li>{card.comp1}</li>
            <li>{card.comp2}</li>
            <li>{card.comp3}</li>
            <li>{card.comp4}</li>
            <li>{card.comp5}</li>
            <li>{card.comp6}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Competition;
