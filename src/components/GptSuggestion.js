import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSuggestion = () => {
  const { moviesResults, moviesNames } = useSelector((store) => store.gpt);
  if (!moviesNames || !moviesResults) {
    return;
  }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-75">
      <div>
        {moviesNames.map((movie, index) => (
          <MoviesList key={movie} title={movie} movies={moviesResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestion;
