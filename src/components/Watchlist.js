import Button from "./Button";

const Watchlist = ({
  watchlist,
  openModal,
  setOpenModal,
  fetchMovie,
  removeWatchlist,
}) => {
  return (
    <div className="container" id="movies-container">
      {watchlist.map((movie) => (
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
                text="Remove From Watchlist"
                color="#DC3545"
                onClick={() => {
                  removeWatchlist(movie);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
