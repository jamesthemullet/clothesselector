import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddToWardrobe from "../AddToWardrobe";
import SelectWardrobe from "../SelectWardrobe";
import YourWardrobe from "../YourWardrobe";
import Home from "../Home";

const Nav = (data) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/addToWardrobe">Add items to your wardrobe</Link>
            </li>
            <li>
              <Link state={data} to="/selectWardrobe">
                Select today's clothes
              </Link>
            </li>
            <li>
              <Link state={data} to="/yourWardrobe">
                Your current wardrobe
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addToWardrobe" element={<AddToWardrobe />} />
          <Route path="/selectWardrobe" element={<SelectWardrobe />} />
          <Route path="/yourWardrobe" element={<YourWardrobe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Nav;
