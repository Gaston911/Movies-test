import React from "react";
import Filter from "./Filter";
import MovieCrads from "./MovieCrads";
import { useState } from "react";

const MovieList = ({ movie }) => {
  const [text, settext] = useState("");
  return (
    <div>
      <Filter settext={settext} />
      <div className="list">
        {movie
          .filter((el) => el.name.includes(text))
          .map((el) => (
            <MovieCrads mov={el} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
