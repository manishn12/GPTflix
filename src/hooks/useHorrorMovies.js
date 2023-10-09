import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=27", API_OPTIONS);
    const response = await data.json();
    dispatch(addHorrorMovies(response.results));
    console.log(response.results);
  };

  useEffect(() => {
    getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
