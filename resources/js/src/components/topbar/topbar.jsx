import React from "react";
import "./topbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
export default function TopBar(props) {
  const { isLoggedIn, handleLogout } = props;
  const history = useHistory();

  const logout = () => {
    axios.post("http://localhost:8888/reactProject/logout.php")
    history.push("/login");
    handleLogout();
  };

  return (
    <div className="top">
      <div className="topLeft">
        <img className="topImg" src={logo} alt="Logo" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/">
            <li className="topListItem">HOME</li>
          </Link>
          

         
          {!isLoggedIn ? (
            <>
             <Link to="/services">
                <li className="topListItem">SERVICES</li>
              </Link>
              <Link to="/login">
                <li className="topListItem">LOGIN</li>
              </Link>
              <Link to="/register">
                <li className="topListItem">REGISTER</li>
              </Link>
             
            </>
          ) : (
            <li className="topListItem" onClick={logout}>
              LOGOUT
            </li>
          )}
          <Link
            to={{ pathname: "http://fxb0881.uta.cloud/blog" }}
            target="_blank"
          >
            <li className="topListItem">BLOG</li>
          </Link>
          <Link to="/about">
            <li className="topListItem">ABOUT</li>
          </Link>
          <Link to="/contactus">
            <li className="topListItem">CONTACT US</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
    </div>
  );
}
