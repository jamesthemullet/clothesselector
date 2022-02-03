import { useState } from "react";
import { useLocation } from "react-router-dom";

const SelectWardrobe = () => {
  const [myBottoms, setMyBottoms] = useState([]);
  const [myTops, setmyTops] = useState([]);
  const [myFeet, setmyFeet] = useState([]);
  const [myOuterwear, setmyOuterwear] = useState([]);
  const location = useLocation();
  console.log(50, location);
  const {
    data: { male },
  } = location.state;
  console.log(51, male);

  const chooseMyOutfit = () => {
    console.log(999, male);
    setMyBottoms(male.bottom[0].type);
    setmyTops(male.top[0].type);
    setmyFeet(male.feet[0].type);
    setmyOuterwear(male.coats[0].type);
  };
  return (
    <div>
      <h3>Select wardrobe</h3>
      <button onClick={chooseMyOutfit}>Click me</button>
      <p>outfit is: {myBottoms}</p>
      <p>{myTops}</p>
      <p>{myFeet}</p>
      <p>{myOuterwear}</p>
    </div>
  );
};

export default SelectWardrobe;
