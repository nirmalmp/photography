import React, { useEffect, useRef, useState } from "react";
import classes from "./Home.module.css";
import TopMenu from "../../components/TopMenu/TopMenu";

const home = () => {
  return (
    <div className={classes.wrapper}>
      <TopMenu />

      <div className={classes.homeWrapper}>
        <div className={classes.captureWrapper}>
          <div className={classes.captureText}> Capture Moments</div>
          <div className={classes.taglineText}>
            Professional photography and videography services capturing the essence of real estate properties.
          </div>
        </div>
      </div>

      <div className={classes.photographyWrapper}>
        <div className={classes.photographyLeft}></div>
        <div className={classes.photographyRight}>
          <div className={classes.photographyTextWrapper}>
            <div className={classes.photographyHeader}>Photography</div>
            <div className={classes.photographyText}>
              Our photography services bring real estate listings to life, providing engaging videos that highlight the unique features of each
              property.
            </div>
            <div className={classes.watch}>Watch Photos</div>
          </div>
        </div>
      </div>

      <div className={classes.photographyWrapper}>
        <div className={classes.photographyRight}>
          <div className={classes.photographyTextWrapper}>
            <div className={classes.photographyHeader}>Videography</div>
            <div className={classes.photographyText}>
              Explore our videography projects to see how we bring real estate listings to life through engaging videos that tell a compelling story.
            </div>
            <div className={classes.watch}>Watch Videos</div>
          </div>
        </div>
        <div className={classes.photographyLeft}></div>
      </div>

      <div className={classes.photographyWrapper}>
        <div className={classes.photographyLeft}></div>
        <div className={classes.photographyRight}>
          <div className={classes.photographyTextWrapper}>
            <div className={classes.photographyHeader}>Property Tours</div>
            <div className={classes.photographyText}>
              Experience virtual property tours that allow potential buyers to immerse themselves in the property from the comfort of their own space.
            </div>
            <div className={classes.watch}>Watch Property Tours</div>
          </div>
        </div>
      </div>

      <div className={classes.photographyWrapper}>
        <div className={classes.photographyRight}>
          <div className={classes.photographyTextWrapper}>
            <div className={classes.photographyHeader}>Aerial Shots</div>
            <div className={classes.photographyText}>
              Elevate your listings with breathtaking aerial shots that provide a different perspective and enhance the overall appeal of the
              property.
            </div>
            <div className={classes.watch}>Watch Aerial Shots</div>
          </div>
        </div>
        <div className={classes.photographyLeft}></div>
      </div>

      <div className={classes.priceWrapper}>
        <div className={classes.priceHeader}>Pricing</div>
      </div>

      <div className={classes.touchWrapper}>
        <div className={classes.touchHeader}>Get in Touch With Us</div>
        <div className={classes.touchText}>
          Reach out to us for all your real estate photography and videography needs. Let's discuss how we can elevate your property listings.
        </div>
        <div className={classes.touchSubText}>Location</div>
        <div className={classes.touchSubText}>Email</div>
        <div className={classes.touchSubText}>Phone Number</div>
      </div>

      <div className={classes.contactWrapper}>
        <div className={classes.contactInnerWrapper}>
          <div className={classes.contactHeader}>Contact Us</div>
          <div className={classes.inputWrapper}>
            <div className={classes.input}>
              <div className={classes.inputText}>First Name</div>
              <input placeholder="First Name" />
            </div>
            <div className={classes.input}>
              <div className={classes.inputText}>Last Name</div>
              <input placeholder="Last Name" />
            </div>
          </div>
          <div className={classes.inputWrapper}>
            <div className={classes.input}>
              <div className={classes.inputText}>Email</div>
              <input placeholder="Email" />
            </div>
            <div className={classes.input}>
              <div className={classes.inputText}>Phone</div>
              <input placeholder="Phone" />
            </div>
          </div>
          <div className={classes.inputWrapper}>
            <div className={classes.message}>
              <div className={classes.inputText}>Date, Time, Other Message</div>
              <textarea placeholder="Message" className={classes.textInput} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
