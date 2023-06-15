import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React, { useEffect } from "react";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import User from "../pages/User/User";
import { useDispatch, useSelector } from "react-redux";
import { loginUserToken } from "../redux/actions/user";
import Header from "../components/header/Header";

export default function Navigation() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => ({
    token: state.userReducer.token,
  }));
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      loginUserToken(tokenFromStorage, dispatch);
    }
    console.log(tokenFromStorage);
  }, []);
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
  return (
    <Router>
      <Header />
      {token ? appNavigator() : authNavigator()}
    </Router>
  );
}
