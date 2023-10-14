import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const response = await data.json();
    dispatch(addPopularMovies(response.results));
    console.log(response.results);
  };

  useEffect(() => {
    if (!popularMovie) getPopularMovies();
  }, []);
};

export default usePopularMovies;
