import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log("movies", movies);

  return (
    <div className="px-2 md:px-6">
      <h1 className="text-lg md:text-3xl py-3 md:py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">{movies && movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} name={movie.original_name} />)}</div>
      </div>
    </div>
  );
};

export default MoviesList;
