import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddToWardrobe from "../AddToWardrobe";
import SelectWardrobe from "../SelectWardrobe";
import YourWardrobe from "../YourWardrobe";
import Home from "../Home";
import "./nav.css";

interface NavProps {
  data: {};
}

const Nav = (data: NavProps) => {
  return (
    <Router>
      <div className="nav">
        <nav>
          <ul className="top-nav">
            <li>
              <Link state={data} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/addToWardrobe">Add items</Link>
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
