import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../Components/Searchbar/Searchbar";

import classes from "../App.module.css";
import Card from "../Components/Card/Card";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("spiderman");

  

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: search },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_KEY,
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);

        // const filteredResults = response.data.filter(result => !result.akas && result.image);

        // console.log(filteredResults);

        setMovies(response.data.d);
        // setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });


      



  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getDetails = (e) => {
    var options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
      params: { tconst: e, currentCountry: "US" },
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': 'ddc89a2bdfmshdc3abdfbf034538p19766ejsn393a62bcc53f'
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.plotSummary.text);

        // const filteredResults = response.data.filter(result => !result.akas && result.image);

        // console.log(filteredResults);

        // setMovies(response.data.d);
        // setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className={classes.App}>
      <h2>Search Movies</h2>

      <Searchbar search={search} change={handleChange} />

      <div className={classes.CardContainer}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              id={movie.id}
              title={movie.l}
              year={movie.y}
              details={getDetails}
              image={movie.i ? movie.i.imageUrl : null}
            />
          ))
        ) : (
          <h4>No Results found</h4>
        )}
      </div>
    </div>
  );
};

export default Homepage;
