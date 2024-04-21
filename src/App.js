import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/Header";
import { useDispatch } from "react-redux";
import HomePage from "./components/Home";
import { searchTextAction } from "./redux/actions";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetails";

function App() {
  const headerTitle = "Movie Search";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchTextAction(""));
  });

  return (
    <>
      <div>
        <AppHeader title={headerTitle} />
      </div>
      <Routes>
        <Route from="/?*" to="/" />
        <Route exact path="/" Component={() => <HomePage />} />
        <Route exact path="/movieDetail" Component={() => <MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
