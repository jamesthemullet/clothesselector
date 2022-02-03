import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const [wardrobe, setWardrobe] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("src/components/YourWardrobe/data.json");
        const Wardrobe = await data.json();
        setWardrobe(Wardrobe);
        console.log(1, Wardrobe);
      } catch (e) {
        return;
      }
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clothes Selector</h1>
      </header>
      <main>
        <Home />
        <Nav data={wardrobe} />
      </main>
    </div>
  );
}

export default App;