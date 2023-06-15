import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/user";
import argentBankLogo from "../../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../header/Header.css";

export default function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { token } = useSelector((state) => ({
    token: state.userReducer.token,
  }));
  const goToUser = () => {
    navigate("/user");
  };
  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Bank Tree"
          />

          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <div onClick={goToUser}>User</div>
          {token ? (
            <div onClick={() => logoutUser(dispatch)}>
              <FontAwesomeIcon icon={faRightFromBracket} className="iconeBack" />
              Sign Out
            </div> //Fonction fléché pour que ca se lance que au click (uniquement quand il y a parametre)
          ) : (
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}