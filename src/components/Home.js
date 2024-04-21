import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([]);

  const searchValue = useSelector((state) => state.searchTextReducer.value);
  //   const staticV = "batman";

  // api to get movie details
  // api key generated : 398f004
  const getMovieDetails = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=398f004`;

    const response = await axios.get(url);
    console.log("Sample Movie List", response);
    setMoviesList(response.data.Response ? response.data.Search : "");
  };

  useEffect(() => {
    getMovieDetails(searchValue);
  }, [searchValue]);

  const navigateToDetails = (movie) => {
    console.log("Movie detail", movie);
  };

  return (
    <>
      {moviesList ? (
        <div className="row movieListCont">
          {moviesList.map((movie, index) => (
            <div
              className="image-container d-flex justify-content-start m-3"
              onClick={() => navigateToDetails(movie)}
            >
              <img src={movie.Poster} alt="movie"></img>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h4>No Result</h4>
        </>
      )}
    </>
  );
}
