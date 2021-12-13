import React, { useState } from "react";

const MovieAdd = ({ handelAdd }) => {
  const [show, setshow] = useState(false);
  const [movie, setmovie] = useState({
    name: "",
    description: "",
    posterurl: "",
    rating: "",
  });
  return (
    <div className="add-movie">
      <button onClick={() => setshow(!show)}>
        <i class="material-icons">add </i>Add Movie
      </button>
      {show ? (
        <div className="modal-bg">
          <div className="modal-body" style={{ position: "relative" }}>
            <i
              class="material-icons"
              style={{ position: "absolute", right: "10px", top: "15px" }}
              onClick={() => setshow(!show)}
            >
              close
            </i>
            <input
              type="Text"
              placeholder="movie name"
              onChange={(e) => setmovie({ ...movie, name: e.target.value })}
            />
            <input
              type="Text"
              placeholder="movie descreption"
              onChange={(e) =>
                setmovie({ ...movie, description: e.target.value })
              }
            />
            <input
              type="Text"
              placeholder="movie image"
              onChange={(e) =>
                setmovie({ ...movie, posterurl: e.target.value })
              }
            />
            <input
              type="Text"
              placeholder="movie rate"
              onChange={(e) => setmovie({ ...movie, rating: e.target.value })}
            />
            <button
              onClick={() => {
                handelAdd(movie);
                setshow(!show);
              }}
            >
              {" "}
              Add Movie{" "}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieAdd;
