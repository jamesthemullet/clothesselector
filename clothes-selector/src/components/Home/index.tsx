import "./home.css";
import SelectWardrobe from "../SelectWardrobe";
import { useLocation } from "react-router-dom";
interface LocationState {
  state: {
    data: {};
  };
}

const Home: React.FC<SearchProps> = () => {
  const location = useLocation();
  const { state } = location as LocationState;

  return (
    <div className="home">
      <p>
        Tired of having too many clothes and not knowing what to wear in the
        morning?
      </p>
      <p>Then Clothes Selector is for you.</p>
      <p>
        Why spend effort in making the decision when Clothes Selector can decide
        for you.
      </p>
      <SelectWardrobe data={state && state.data} />
    </div>
  );
};

export default Home;
