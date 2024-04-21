import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTextAction } from "../redux/actions";
import { Link } from "react-router-dom";

export default function AppHeader(props) {
  const dispatch = useDispatch();
  // const searchVal = useSelector((state) => state.searchTextReducer.value);
  const [searchTxt, setSearchTxt] = useState("");
  const searchOnChange = (e) => {
    setSearchTxt(e.target.value);
    // dispatch(searchTextAction(enteredValue));
  };
  const searchClick = (e) => {
    dispatch(searchTextAction(searchTxt));
  };
  return (
    <nav class="navbarHeader navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/"} class="navbar-brand">
        {props.title}
      </Link>

      <div className="searchCont">
        <input
          class="form-control mr-sm-2"
          type="search"
          value={searchTxt}
          placeholder="Enter Text"
          aria-label="Search"
          onChange={(e) => searchOnChange(e)}
        ></input>
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={searchClick}
        >
          Search
        </button>
      </div>
    </nav>
  );
}
