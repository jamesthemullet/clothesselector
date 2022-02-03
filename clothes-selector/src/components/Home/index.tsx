import "./home.css";
import SelectWardrobe from "../SelectWardrobe";
import { useLocation } from "react-router-dom";
interface LocationState {
  data: {};
}

const Home: React.FC = () => {
  const location = useLocation();
  const { data } = location.state as LocationState;

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
      <SelectWardrobe data={data} />
    </div>
  );
};

export default Home;
