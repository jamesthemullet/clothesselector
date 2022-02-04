import { useState } from "react";
import { useLocation } from "react-router-dom";

interface LocationState {
  state: {
    data: {
      male: [];
    };
  };
}

const SelectWardrobe = () => {
  const [myOutfit, setMyOutfit] = useState(null);
  const location = useLocation();
  const { state } = location as LocationState;

  const chooseMyOutfit = () => {
    const {
      data: { male },
    } = state;
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
