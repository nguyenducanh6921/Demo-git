import React from "react";
import { useState, useEffect } from "react";
import "../components/TestSearch.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function TestSearch() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=c0fe463bf876045e591e9f994bba1fe9";

  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=c0fe463bf876045e591e9f994bba1fe9&query=";

  const [movies, setMovies] = useState([]);

  const [term, setTerm] = useState("");

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(movies);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(
            new URL(url).search
          );
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="searchPage">
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => setTerm(e.target.value)}
        />
        <ion-icon name="search-outline"></ion-icon> .
      </form>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

      <div className="searchContent">
        {movies.map((movie) => (
          <div className="movieItem" key={movie.id} onClick={() => handleClick(movie)} >
            <img
              // src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              src={movie.poster_path ? API_IMG + movie.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="poster"
            />
            <div className="info">
              <span style={{ color: "white" }}>{movie.title} </span>
              <p style={{ color: "white" }}>
                <ion-icon name="star"></ion-icon>
                {movie.vote_average}
              </p>
            </div>
          </div>
          
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default TestSearch;
