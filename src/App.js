import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import GetProject from "./pages/getProject/GetProject";
function App() {
  return (
    <Router>
      <Routes>
      <Route  index element = {<Home/>} />
      <Route  path="/get-project" element = {<GetProject/>} />
    </Routes>
  </Router>
  );
}

export default App;
