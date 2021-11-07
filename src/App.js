import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Title from "./components/Title";
import Movies from "./components/Movies";
import Modal from "./components/Modal";
import Watchlist from "./components/Watchlist";

function App() {
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [overview, setOverview] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const movieFromServer = await fetchMovie();
      // setOverview(movieFromServer);
    };

    getMovie();
  }, [id]);

  // fetch movie
  const fetchMovie = async (id) => {
    const res = await fetch(`http://localhost:5000/movies/${id}`);
    const data = await res.json();
    setOverview(data);
    return data;
  };

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await fetchMovies();
      setMovies(moviesFromServer);
    };

    getMovies();
  }, []);

  // fetch movies
  const fetchMovies = async () => {
    const res = await fetch("http://localhost:5000/movies");
    const data = await res.json();

    return data;
  };

  // save to local storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem("top-10-movies-watchlist", JSON.stringify(items));
  };

  // retrieve from local storage
  useEffect(() => {
    const movieWatchlist = JSON.parse(
      localStorage.getItem("top-10-movies-watchlist")
    );

    setWatchlist(movieWatchlist);
  }, []);

  // add watchlist
  const addWatchlist = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  };

  // remove watchlist
  const removeWatchlist = (movie) => {
    const newWatchlist = watchlist.filter(
      (watchlistmovie) => watchlistmovie.id !== movie.id
    );
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  };

  const movieInWatchlist = (movie) => {
    return watchlist.includes(movie);
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Title text="Top 10 Movies Based on IMDb Rating" />
              <Movies
                movies={movies}
                openModal={openModal}
                setOpenModal={setOpenModal}
                fetchMovie={fetchMovie}
                addWatchlist={addWatchlist}
                removeWatchlist={removeWatchlist}
                movieInWatchlist={movieInWatchlist}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <>
              <Title text="Watchlist" />
              {watchlist.length > 0 ? (
                <Watchlist
                  watchlist={watchlist}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  fetchMovie={fetchMovie}
                  removeWatchlist={removeWatchlist}
                />
              ) : (
                <p style={{ textAlign: "center", fontStyle: "italic" }}>
                  There is no movie on your watchlist
                </p>
              )}
            </>
          }
        />
      </Routes>

      <div
        id="movies-container"
        className={openModal ? "modal block" : "modal none"}
      >
        <Modal movie={overview} setOpenModal={setOpenModal} />
      </div>
    </Router>
  );
}

export default App;
