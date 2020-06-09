import React from "react";
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = (props) => {

  const handleLogout = (e) => {
    e.preventDefault();

    sessionStorage.removeItem("activeUser")
    props.history.push("/login")
  }

  return (
    <header>
      <h1>Nutshell</h1>
      <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link" to="/news">
              News
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/tasks">
              Tasks
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/messages">
              Messages
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/friends">
              Friends
            </Link>
          </li>


        </ul>
        <button onClick={handleLogout}>Log Out</button>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
