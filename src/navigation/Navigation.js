import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React, { useState } from "react";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import User from "../pages/User/User";
import { useSelector } from "react-redux";

export default function Navigation() {
  const { token } = useSelector(state => ({
   token:state.userReducer.token
 }))
  const authNavigator = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  };
  const appNavigator = () => {
    return (
      <Routes>
              <Route exact path="/user" element={<User />} />
        <Route exact path="/" element={<Home />} />
  
        <Route exact path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  };
  return <Router>{token ? appNavigator() : authNavigator()}</Router>;
}
