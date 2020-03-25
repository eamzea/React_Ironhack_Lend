import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarP from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./components/Home";
import Results from "./components/Results";

function App() {
  return (
    <>
      <NavbarP />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/results/:stuff" component={Results} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
