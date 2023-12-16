import { useState } from "react";
import room1 from "../images/desktop-image-hero-1.jpg";
import room2 from "../images/desktop-image-hero-2.jpg";
import room3 from "../images/desktop-image-hero-3.jpg";
import LeftArrow from "../layout/leftArrow";
import RightArrow from "../layout/rightArrow";
import classes from "./imageSlider.module.css";

const images = [room1, room2, room3];

function ImageSlider() {
  
  const [imageIndex, setImageIndex] = useState(0);
  const leftClickHandler = () => {
    if (imageIndex === 0) {
      return setImageIndex(images.length - 1);
    } else {
      return setImageIndex(imageIndex - 1);
    }
  };
  const rightClickHandler = () => {
    if (imageIndex === images.length - 1) {
      return setImageIndex(0);
    } else {
      return setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className={classes.mainContainer}>
    <div className={classes.container}>
      <div className={classes.imgContainer} style={{ height:"100%",display: "flex", overflow: "hidden" }}>
        {images.map((url) => (
          <img
            key={url}
            src={url}
            className={classes.img}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <div className={classes.btndiv}>
      <button onClick={leftClickHandler}>
        <LeftArrow />
      </button>
      <button onClick={rightClickHandler}>
        <RightArrow />
      </button>
      </div>
      
    </div>
    </div>
  );
}

export default ImageSlider;
