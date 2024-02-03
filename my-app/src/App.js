import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage, HomePage, Navbar} from "./Components";
import { SignupPage } from "./Components/Pages/SignupPage";
import { LoginPage } from "./Components/Pages/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        <Route path="src/Components/Pages/SignupPage" element={<SignupPage/>}/>
        <Route path="src/Components/Pages/LoginPage" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
