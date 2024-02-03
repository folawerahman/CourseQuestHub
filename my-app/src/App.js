import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage, HomePage, Navbar } from "./Components";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
