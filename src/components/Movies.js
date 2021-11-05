import Movie from "./Movies";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { getDefaultNormalizer } from "@testing-library/dom";

const Movies = ({ movies, openModal, setOpenModal, fetchMovie }) => {
  // const [overview, setOverview] = useState({});
  // const [id, setId] = useState();

  // useEffect(() => {
  //   const getMovie = async () => {
  //     const movieFromServer = await fetchMovie();
  //     // setOverview(movieFromServer);
  //   };

  //   getMovie();
  //   console.log(overview);
  // }, [id]);

  // // fetch movie
  // const fetchMovie = async (id) => {
  //   const res = await fetch(`http://localhost:5000/movies/${id}`);
  //   const data = await res.json();
  //   setOverview(data);
  //   return data;
  // };

  return (
    <>
      {/* <div className="modal">
        {openModal && <Modal movie={overview} setOpenModal={setOpenModal} />}
      </div> */}

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
            <div className="row flex-end">
              <button
                className="btn"
                onClick={() => {
                  setOpenModal(!openModal);
                  fetchMovie(movie.id);
                  // setId(movie.id);
                }}
              >
                Overview
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movies;
