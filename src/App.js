import { useState, useEffect } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Movies from "./components/Movies";
import Modal from "./components/Modal";

function App() {
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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

  // fetch movie
  const fetchMovie = async (id) => {
    const res = await fetch(`http://localhost:5000/movies/${id}`);
    const data = await res.json();

    return data;
  };

  return (
    <>
      <Header />
      <Title />
      <div className="container" id="movies-container">
        <Movies
          movies={movies}
          openModal={openModal}
          setOpenModal={setOpenModal}
          // overview={(id) => console.log(fetchMovie(id))}
        />
      </div>
    </>
  );
}

export default App;
