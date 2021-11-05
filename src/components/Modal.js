const Modal = ({ movie, setOpenModal }) => {
  return (
    // <>{console.log(movie)}</>

    <div className="modal-content">
      <div className="modal-header">
        <span className="close" onClick={() => setOpenModal(false)}>
          &times;
        </span>
        <h1 className="modal-title">{movie.title}</h1>
      </div>
      <div className="modal-body">
        <img src={movie.poster} alt="Movie Poster" className="modal-img" />
        <div className="modal-desc">
          <div className="mb-1">
            <h3>Overview</h3>
            <p>{movie.description}</p>
          </div>
          <div className="mb-05">
            <h4 className="inline">IMDb rating: </h4>
            <span>{movie.rate}</span>
          </div>
          <div className="mb-05">
            <h4 className="inline">Genre: </h4>
            <span>{movie.genre}</span>
          </div>
          <div className="mb-05">
            <h4 className="inline">Year: </h4>
            <span>{movie.year}</span>
          </div>
          <div className="mb-05">
            <h4 className="inline">Duration: </h4>
            <span>{movie.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
