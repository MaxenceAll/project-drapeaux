import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />

        {/* Si aucune route connue : */}
        <Route path="*" element = {<Home />} />

      </Routes>    
    </BrowserRouter>
  );
};

export default App;
