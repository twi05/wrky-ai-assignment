import React from "react";
import CompanySlider from "./component/CompanySlider";
import HeroComponent from "./component/HeroComponent";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <HeroComponent/>
      <CompanySlider/>
    </div>
  );
}

export default App;
