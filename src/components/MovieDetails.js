import React from "react";
import { useSelector } from "react-redux";

export default function MovieDetail() {
  const movieDetail = useSelector((state) => state.movieDetailReducer.details);
  return (
    <>
      <div className="image-container-detail d-flex justify-content-center m-3">
        <img src={movieDetail.Poster} alt="movie" className="posterImg"></img>
      </div>
      <div className="descriptionCont">
        <div>Type: {movieDetail.Type}</div>
        <div>Title: {movieDetail.Title}</div>
        <div>Release Year: {movieDetail.Year}</div>
      </div>
    </>
  );
}
