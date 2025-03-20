import React from "react";
import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  let navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <div className={classes.column1}>
          <img className={classes.symbol}></img>
          <div className={`${classes.noHover} ${classes.categoryText}`}>Company Name</div>
        </div>
        <div className={classes.column2}>
          <div className={classes.categoryHeader}>More Links</div>
          <div
            className={`${classes.categoryLinksReach} ${classes.moreLinks}`}
            onClick={() => {
              navigate("/compliance/privacy-policy");
            }}
          >
            Privacy Policy
          </div>
          <div className={classes.pipe}>|</div>
          <div
            className={`${classes.categoryLinksReach} ${classes.moreLinks}`}
            onClick={() => {
              navigate("/compliance/terms-of-use");
            }}
          >
            Terms & Conditions
          </div>

          <div className={classes.pipe}>|</div>
          <div
            className={`${classes.categoryLinksReach} ${classes.moreLinks}`}
            onClick={() => {
              navigate("/compliance/disclosure");
            }}
          >
            Disclosure
          </div>
          <div className={classes.pipe}>|</div>
          <div
            className={`${classes.categoryLinksReach} ${classes.moreLinks}`}
            onClick={() => {
              navigate("/contact-us-faqs");
            }}
          >
            FAQs
          </div>
        </div>
        <div className={classes.column3}>
          <div className={classes.categoryHeader}>Reach Us</div>
          <div className={classes.categoryLinksReach}>email@gmail.com</div>
          <div className={`${classes.categoryLinksReach} ${classes.reachUs}`}>
            Toronoto, Canada
            <br />
            <br />
          </div>
          <div className={`${classes.categoryLinksReach} ${classes.reachUs} ${classes.specialAdjustment}`}>All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
