import { useEffect } from "react";
import "./App.css";
import "./bootstrap.min.css";
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
        <Route from="/?Code*" to="/" />
        <Route exact path="/" Component={() => <HomePage />} />
        <Route exact path="/movieDetail" Component={() => <MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
