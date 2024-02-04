import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage, HomePage, Navbar, Register, LoginPage} from "./Components";
import { SignupPage } from "./Components/Pages/SignupPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Signup } from "./Components/Pages/Register/Signup";


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/HomePage" element={<HomePage/>}></Route>
        <Route path="/LandingPage" element=
        {<LandingPage/>}></Route>
        <Route path="/LoginPage" element={<LoginPage/>}></Route>
        <Route path="/SignupPage" element={<SignupPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
