import darkroom from "../images/image-about-dark.jpg";
import lightroom from "../images/image-about-light.jpg";
import classes from "./article.module.css"

function Article() {
  return (
    <div className={classes.container}>
      <img src={darkroom} />
      <div className={classes.text}>
      <h4>ABOUT OUR FURNITURE</h4>
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
      </div>
      <img src={lightroom} />
    </div>
  );
}

export default Article;
