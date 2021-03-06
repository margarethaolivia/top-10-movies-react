import Button from "./Button";

const Movies = ({
  movies,
  openModal,
  setOpenModal,
  fetchMovie,
  addWatchlist,
  removeWatchlist,
  movieInWatchlist,
}) => {
  return (
    <div className="container" id="movies-container">
      {movies.map((movie) => (
        <div className="card" key={movie.id}>
          <img
            src={movie.poster}
            alt="Movie Poster"
            className="card-img pointer"
            onClick={() => {
              setOpenModal(!openModal);
              fetchMovie(movie.id);
            }}
          />
          <div className="card-body">
            <div
              className="row pointer"
              onClick={() => {
                setOpenModal(!openModal);
                fetchMovie(movie.id);
              }}
            >
              <h3 className="card-title">{movie.title}</h3>
              <div className="badge">
                <p>{movie.rate}</p>
              </div>
            </div>
            <div className="row flex-center">
              <Button
                classList="btn"
                text={
                  movieInWatchlist(movie)
                    ? "Remove From Watchlist"
                    : "Add to Watchlist"
                }
                color={movieInWatchlist(movie) ? "#DC3545" : "#198754"}
                onClick={() => {
                  {
                    movieInWatchlist(movie)
                      ? removeWatchlist(movie)
                      : addWatchlist(movie);
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
