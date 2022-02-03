import { useState } from "react";
import { useLocation } from "react-router-dom";

const SelectWardrobe = () => {
  const [myOutfit, setMyOutfit] = useState(null);
  const location = useLocation();
  const {
    data: { male },
  } = location.state;

  const chooseMyOutfit = () => {
    const generatedOutfit = [];
    Object.keys(male).forEach((key) => {
      generatedOutfit.push(
        male[key][Math.floor(Math.random() * male[key].length)]
      );
    });
    setMyOutfit(generatedOutfit);
  };
  return (
    <div>
      <h3>Select wardrobe</h3>
      <button onClick={chooseMyOutfit}>Click me</button>
      {myOutfit && (
        <>
          <p>Your outfit today is: </p>
          <ul>
            {Object.keys(myOutfit).map((key) => {
              return (
                <li key={key}>{`${myOutfit[key].colour} ${
                  myOutfit[key].make ? myOutfit[key].make : ""
                }  ${
                  myOutfit[key].designFeature ? myOutfit[key].designFeature : ""
                } ${myOutfit[key].type}`}</li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default SelectWardrobe;
