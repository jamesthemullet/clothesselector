import { useEffect, useState } from "react";
import Wardrobe from "../Wardrobe";
import { useLocation } from "react-router-dom";

const YourWardrobe = () => {
  const location = useLocation();
  const {
    data: { male },
  } = location.state;
  return (
    <div>
      <p>this is what is in your wardrobe</p>
      {Object.entries(male).map(([key, part]: any) => {
        <p>hi</p>;
        return <Wardrobe key={key} data={part} />;
      })}
    </div>
  );
};

export default YourWardrobe;
