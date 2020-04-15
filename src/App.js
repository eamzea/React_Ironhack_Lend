import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./utils/user.context";
import LendService from "./services/lendService";
import NavbarP from "./components/ui/Navbar";
import FooterP from "./components/ui/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterP from "./components/Register";
import Home from "./components/Home";
import Results from "./components/Results";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App() {
  const [theUser, getTheUser] = useState();

  const service = new LendService();

  const fetchUser = () => {
    if (theUser === null) {
      service
        .logIn()
        .then((response) => {
          getTheUser(response.data);
        })
        .catch((err) => {
          getTheUser(null);
        });
    }
  };

  fetchUser();

  return (
    <UserContext.Provider value={{ user: theUser, updateUser: getTheUser }}>
      <NavbarP />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={RegisterP} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute
          path="/edit-profile/:username"
          component={EditProfile}
        />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/results" component={Results} />
        <Route path="/results/:stuff" component={Results} />
      </Switch>
      <FooterP />
    </UserContext.Provider>
  );
}

export default App;
