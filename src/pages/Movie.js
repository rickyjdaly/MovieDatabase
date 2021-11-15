import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../App.module.css";
import { FaUndoAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Movie = (props) => {
  const [details, setDetails] = useState();
  const [movieData, setMovieData] = useState([]);

  const [loading, setLoading] = useState(true);

  const { id } = props.match.params;

  const getDetails = () => {
    var options1 = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
      params: { tconst: id, currentCountry: "US" },
      headers: {
        "x-rapidapi-key": "ddc89a2bdfmshdc3abdfbf034538p19766ejsn393a62bcc53f",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options1)
      .then(function (response) {
        console.log(response.data.plotSummary.text);

        setDetails(response.data.plotSummary.text);

        // const filteredResults = response.data.filter(result => !result.akas && result.image);

        // console.log(filteredResults);

        // setMovies(response.data.d);
        // setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const getData = () => {
    var options2 = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-details",
      params: { tconst: id },
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "810d263776msh02141e7e93f8122p19c073jsnbde6be5d7ed9",
      },
    };

    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data);
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    getDetails();
    getData();

    

    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <div className={classes.MovieContainer}>
          {/* <p>{details}</p> */}
          <div className={classes.ImageFrame}>
            <img
              src={movieData.image ? movieData.image.url : null}
              alt={movieData.title}
            />
          </div>
          <div className={classes.MovieDetails}>
            <h4 className={classes.Title}>{movieData.title}</h4>
            <p className={classes.Details}>{details}</p>
            <p className={classes.Year}>{movieData.year}</p>

            {/* <h4 className={classes.Title}>spiderman far from home</h4>
            <p className={classes.Details}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              consequuntur, beatae, porro voluptatum quia delectus asperiores,
              at iure laborum praesentium tenetur quod eaque excepturi quibusdam
              recusandae ratione adipisci sed corrupti. Magnam illum voluptatum,
              soluta illo ex adipisci veritatis molestiae tempore quia,
              laudantium distinctio quaerat assumenda ipsa eligendi fugit
              praesentium iste.
            </p>
            <p className={classes.Year}>2002</p> */}
            
            <Link to='/'><button className={classes.Button}><FaUndoAlt />   <span className={classes.ButtonText}>Go back to movies</span></button></Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
