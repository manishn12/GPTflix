import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return;

  return (
    <div>
      <VideoTitle title={movies[0].original_title} overview={movies[0].overview} />
      <VideoBackground movieId={movies[0].id} />
    </div>
  );
};

export default MainContainer;
