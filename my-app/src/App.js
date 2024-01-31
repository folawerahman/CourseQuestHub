import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage, HomePage, Navbar} from "./Components";
import { Register } from "./Components/Pages/Register";


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        <Route path="src/Components/Pages/Register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
