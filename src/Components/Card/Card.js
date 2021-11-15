import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = ({ id, image, title, year, details }) => {
  return (

    // <p>{title}</p>
    
      <Link
        className={classes.Card}
        to={`/movie/${id}`}
        
      >
        <img src={image} alt={title} />

        <div className={classes.Overlay}>
          <h4 className={classes.Title}>{title}</h4>
          <h6 className={classes.Year}>{year}</h6>
        </div>
      </Link>
    
  );
};

export default Card;
