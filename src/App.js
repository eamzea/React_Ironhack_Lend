import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarP from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavbarP />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
