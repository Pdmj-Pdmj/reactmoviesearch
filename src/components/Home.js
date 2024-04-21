import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieDetailsAction } from "../redux/actions";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const [moviesList, setMoviesList] = useState([]);
  const [respData, setRespData] = useState({});
  const searchValue = useSelector((state) => state.searchTextReducer.value);

  // api to get movie details
  // api key generated : 398f004
  const getMovieDetails = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=398f004`;
    const response = await axios.get(url);
    console.log("Sample Movie List", response);
    let responseObj = response.data;
    setRespData(responseObj.Response);
    setMoviesList(responseObj.Response ? responseObj.Search : "");
  };

  useEffect(() => {
    getMovieDetails(searchValue);
  }, [searchValue]);

  const navigateToDetails = (movie) => {
    // storing particular movie details
    dispatch(movieDetailsAction(movie));
    console.log("Movie detail", movie);
  };

  return (
    <>
      {respData === "True" && moviesList ? (
        <div className="row movieListCont">
          {moviesList.map((movie, index) => (
            <Link to="/movieDetail">
              <div
                className="image-container d-flex justify-content-start m-3"
                onClick={() => navigateToDetails(movie)}
              >
                <img src={movie.Poster} alt="movie"></img>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div class="errorCont" style={{ color: "rgba(0,0,0,.9)" }}>
          {searchValue !== "" ? (
            <h4>No results found</h4>
          ) : (
            <h4>Enter any search text...</h4>
          )}
        </div>
      )}
    </>
  );
}
