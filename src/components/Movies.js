import Button from "./Button";

const Movies = ({ movies, openModal, setOpenModal, fetchMovie }) => {
  return (
    <>
      {movies.map((movie) => (
        <div className="card" key={movie.id}>
          <img src={movie.poster} alt="Movie Poster" className="card-img" />
          <div className="card-body">
            <div className="row">
              <h3 className="card-title">{movie.title}</h3>
              <div className="badge">
                <p>{movie.rate}</p>
              </div>
            </div>
            <div className="row">
              <Button
                classList="btn"
                text="Add to Watchlist"
                onClick={() => {
                  setOpenModal(false);
                }}
              />
              <Button
                classList="btn"
                text="Overview"
                onClick={() => {
                  setOpenModal(!openModal);
                  fetchMovie(movie.id);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movies;
