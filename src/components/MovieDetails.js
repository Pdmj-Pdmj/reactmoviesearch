import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MovieDetail() {
  const movieDetail = useSelector((state) => state.movieDetailReducer.details);
  useEffect(() => {
    console.log(movieDetail);
  });
  return (
    <>
      {movieDetail?.Title ? (
        <>
          <div className="image-container-detail d-flex justify-content-center m-3">
            <img
              src={movieDetail.Poster}
              alt="movie"
              className="posterImg"
            ></img>
          </div>
          <div className="descriptionCont">
            <div>
              <b>Type:</b> {movieDetail.Type}
            </div>
            <div>
              <b>Title:</b> {movieDetail.Title}
            </div>
            <div>
              <b>Release Year:</b> {movieDetail.Year}
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="errorCont">
            <h4>No Data</h4>
          </div>
        </>
      )}
    </>
  );
}
