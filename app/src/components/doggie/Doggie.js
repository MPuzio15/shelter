import React from "react";
import DogImg from "../../images/piesek.gif";
import "./Doggie.css";

const Doggie = () => {
  return (
    <div className="dog__img">
      <img className="dog__img__item" src={DogImg} />
    </div>
  );
};

export default Doggie;
