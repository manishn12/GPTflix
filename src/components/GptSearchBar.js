import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGPtMovies } from "../utils/GPTSlice";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleClick = async () => {
    console.log(searchRef.current.value);

    let searchQuery =
      "Act as an movie recommendation system and suggest me some movies for the query: " +
      searchRef.current.value +
      " movies should be comma separated, and give only 10 movies name.like this. Resukt: Gadar, golmaal, halchal, ... and so on.";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: searchQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults.choices?.[0]?.message?.content);
    let moviesResults = ["Andaz Apna Apna", "HulChul", "Golmaal", "Koi Mil Gaya", "Krish3", "Superman", "Batman", "Spiderman", "IronMan", "Avengers"];

    const promiseArray = moviesResults.map((movie) => searchMoviesTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGPtMovies({ moviesNames: moviesResults, moviesResults: tmdbResults }));
  };

  return (
    <div className="pt-[40%]  md:pt-[10%] flex justify-center ">
      <form className="rounded-xl md:p-3 w-full md:w-1/2 bg-black grid grid-cols-12 bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchRef} className="p-4 m-4 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className="m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg" onClick={handleClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
