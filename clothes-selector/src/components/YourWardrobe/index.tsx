import Wardrobe from "../Wardrobe";
import { useLocation } from "react-router-dom";

const YourWardrobe = () => {
  const location = useLocation();
  const {
    data: { male },
  } = location.state;
  return (
    <div>
      <p>This is what is in your wardrobe</p>
      {Object.entries(male).map(([key, part]) => {
        return <Wardrobe key={key} data={part} />;
      })}
    </div>
  );
};

export default YourWardrobe;
