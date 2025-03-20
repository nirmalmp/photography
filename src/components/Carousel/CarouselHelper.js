import React, { useState, useRef } from "react";
import "./CarouselHelper.css";
import { useSwipeable } from "react-swipeable";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselHelper = ({ content }) => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={false}
        showStatus={false}
        stopOnHover
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={30}
        verticalSwipe="natural"
        interval={5000}
        renderIndicator={(onClickHandler, isSelected, index) => {
          const defStyle = {
            marginRight: "10px",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "var(--i8)",
            cursor: "pointer",
            display: "inline-block",
          };
          const style = isSelected ? { ...defStyle, backgroundColor: "var(--bt1)" } : { ...defStyle };
          return <div style={style} onClick={onClickHandler} onKeyDown={onClickHandler} key={index} role="button" tabIndex={0}></div>;
        }}
      >
        {content}
      </Carousel>
    </div>
  );
};

export default CarouselHelper;
