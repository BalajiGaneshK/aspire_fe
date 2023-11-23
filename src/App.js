import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Menu from "./Menu/Menu";
import Home from "../src/Home/Home.js";
import Cards from "../src/Cards/Cards.js";
import Credit from "../src/Credit/Credit.js";
import Payments from "../src/Payments/Payments.js";
import Settings from "../src/Settings/Settings.js";

function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/payment" element={<Payments />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
