import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  const horrorMovie = useSelector((store) => store.movies?.horrorMovies);
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=27", API_OPTIONS);
    const response = await data.json();
    console.log("horror ", response);
    dispatch(addHorrorMovies(response.results));
    console.log(response.results);
  };

  useEffect(() => {
    if (!horrorMovie) {
      getHorrorMovies();
    }
  }, []);
};

export default useHorrorMovies;
