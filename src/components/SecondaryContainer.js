import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((state) => state.movies?.nowPlayingMovies);
  const popularMoviesList = useSelector((state) => state.movies?.popularMovies);
  const upcomingMoviesList = useSelector((state) => state.movies?.upcomingMovies);
  const horrorMoviesList = useSelector((state) => state.movies?.horrorMovies);

  return (
    moviesList && (
      <div className="bg-black">
        <div className="py-4 md:pl-12 mt-0 md:-mt-60 relative z-30">
          {moviesList && <MoviesList title={"Now Playing"} movies={moviesList} />}
          {popularMoviesList && <MoviesList title={"Popular Movies"} movies={popularMoviesList} />}
          {upcomingMoviesList && <MoviesList title={"Upcoming Movies"} movies={upcomingMoviesList} />}
          {horrorMoviesList && <MoviesList title={"Horror Movies"} movies={horrorMoviesList} />}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
