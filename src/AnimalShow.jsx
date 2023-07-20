import React, { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import dog from "./svg/dog.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import female from "./svg/female.svg";

const svgMap = {
  bird,
  horse,
  cow,
  dog,
  cat,
  gator,
  female,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img alt={type} className="animal" src={svgMap[type]} />
      <img
        alt="heart"
        className="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}
export default AnimalShow;
