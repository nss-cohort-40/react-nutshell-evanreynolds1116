import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";

const Nutshell = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ApplicationViews />
    </React.Fragment>
  );
};

export default Nutshell;
