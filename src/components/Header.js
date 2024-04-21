import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTextAction } from "../redux/actions";
import { Link } from "react-router-dom";

export default function AppHeader(props) {
  const dispatch = useDispatch();
  const searchVal = useSelector((state) => state.searchTextReducer.value);
  const searchOnChange = (e) => {
    let enteredValue = e.target.value;
    dispatch(searchTextAction(enteredValue));
  };
  return (
    <nav class="navbarHeader navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/"} class="navbar-brand">
        {props.title}
      </Link>

      <div>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            value={searchVal}
            placeholder="Enter Text"
            aria-label="Search"
            onChange={(e) => searchOnChange(e)}
          ></input>
        </form>
      </div>
    </nav>
  );
}
