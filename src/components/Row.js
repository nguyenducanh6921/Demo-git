import React, { useEffect, useState } from "react";
import "../components/Row.css";
import axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow = false, idSection }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

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
    <div className="row" id={idSection}>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
