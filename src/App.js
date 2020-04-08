import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarP from "./components/ui/Navbar";
import FooterP from "./components/ui/Footer";
import RegisterP from "./components/Register";
import Home from "./components/Home";
import Results from "./components/Results";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <>
      <NavbarP />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={RegisterP} />
        <Route path="/signup" component={SignUp} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/results" component={Results} />
        <Route path="/results/:stuff" component={Results} />
      </Switch>
      <FooterP />
    </>
  );
}

export default App;
