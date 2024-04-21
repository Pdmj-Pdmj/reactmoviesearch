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

export const masterReducer = combineReducers({
  movieDetailReducer: movieDetailReducer,
});
