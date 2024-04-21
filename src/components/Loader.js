import React from "react";

export default function Loader(props) {
  return (
    <div className="loaderCont">
      <div class="spinner-border" role="status"></div>
      <div class="visually-hidden">{props.loaderText}</div>
    </div>
  );
}
