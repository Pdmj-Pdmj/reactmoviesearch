import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/Header";
import { useDispatch } from "react-redux";
import HomePage from "./components/Home";
import { searchTextAction } from "./redux/actions";

function App() {
  const headerTitle = "Movie Search";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchTextAction("batman"));
  });

  return (
    <>
      <div>
        <div>
          <AppHeader title={headerTitle} />
        </div>
        <HomePage />
      </div>
    </>
  );
}

export default App;
