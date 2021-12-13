import React from "react";
import MovieList from "./MovieList";
import ReactStars from "react-rating-stars-component";

const MovieCrads = ({ mov }) => {
  return (
    <div>
      <div className="movie_card" id="tomb">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={mov.posterurl} />
            <h1>{mov.name}</h1>
            <h4>2018, Roar Uthaug</h4>
            <span className="minutes">125 min</span>
            <p className="type">Action, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">{mov.description}</p>
          </div>

          <div className="movie_social">
            <ul>
              <div className="rate">
                <ReactStars
                  value={mov.rating}
                  edit={false}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            </ul>
          </div>
        </div>
        <div
          className="blur_back"
          style={{
            background: `url(${mov.posterurl})`,

            background: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MovieCrads;
