import React from "react";
import "./Header.css";
import { Link, Redirect } from "react-router-dom";
import { app } from "./firebase";

function Header({ user }) {
  const logout = () => {
    app.auth().signOut();
  };
  return (
    <div className="nav">
      {user ? (
        <div>
          <ul>
            <li>
              <a>
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/login">Login</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/signup">Sign Up</Link>
              </a>
            </li>
            <li onClick={logout}>
              <a className="logout" style={{ float: "right" }}>
                <Link to="/">You are signed in, logout</Link>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            <li>
              <a>
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/login">Login</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/signup">Sign Up</Link>
              </a>
            </li>
            <li>
              <a className="notsignedin" style={{ float: "right" }}>
                <Link to="/login">Not Signed in, Login</Link>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
