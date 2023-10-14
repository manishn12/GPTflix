import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const nowPlayMovie = useSelector((store) => store.movies.addNowPlayingMovies);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const response = await data.json();
    dispatch(addNowPlayingMovies(response.results));
    console.log(response.results);
  };

  useEffect(() => {
    if (!nowPlayMovie) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
