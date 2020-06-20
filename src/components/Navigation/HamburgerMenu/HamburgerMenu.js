import React from "react";
import classes from "./HamburgerMenu.module.css";

const hamburgerMenu = (props) => (
  <div className={classes.HamburgerMenu} onClick={props.clicked}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default hamburgerMenu;
