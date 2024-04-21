import { combineReducers } from "redux";

let movieDetailInitiaState = {};

const movieDetailReducer = (state = movieDetailInitiaState, action) => {
  switch (action.type) {
    case "movieDetail": {
      return {
        details: action.payLoad,
      };
    }
    default: {
      return state;
    }
  }
};

let searchTextInitiaState = "";

const searchTextReducer = (state = searchTextInitiaState, action) => {
  switch (action.type) {
    case "searchText": {
      return {
        value: action.payLoad,
      };
    }
    default: {
      return state;
    }
  }
};

export const masterReducer = combineReducers({
  movieDetailReducer: movieDetailReducer,
  searchTextReducer: searchTextReducer,
});
