import React, { useState, useRef, useEffect } from "react";
import classes from "./TopMenu.module.css";
import { Link, useNavigate } from "react-router-dom";

const TopMenu = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logoWrapper}>
        <div>Logo</div>
        <div>Business Name</div>
      </div>
      <div className={classes.menuWrapper}>
        {["Home", "Features", "Pricing", "Contact"].map((opt, idx) => {
          return <div>{opt}</div>;
        })}
      </div>
    </div>
  );
};
export default TopMenu;
