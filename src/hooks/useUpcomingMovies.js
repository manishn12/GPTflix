import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const upcomingMovie = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
    const response = await data.json();
    dispatch(addUpcomingMovies(response.results));
    console.log(response.results);
  };

  useEffect(() => {
    if (!upcomingMovie) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
