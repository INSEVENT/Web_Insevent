import React from "react";
import cardData from "../data/card";

function Competition() {
  const card = cardData[0];

  return (
    <div className="sec1 d-flex justify-content-center align-items-center" style={{ minHeight: "150vh" }}>
      <div className="mt-5">
        <h1>{card.title}</h1>
        <h3 style={{ fontSize: "10px" }}>{card.time}</h3>

        <img
          src={card.imgSrc}
          alt="img"
          style={{ width: "300px", height: "300px" }}
        />
      <div className="m-5 mt-0" style={{ fontSize: "12px" }}>
        <p >{card.description}</p>
        <p >{card.paragraf1}</p>
      </div>
      </div>
    </div>
  );
}

export default Competition;
