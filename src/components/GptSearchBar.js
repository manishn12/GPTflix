import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);

  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="p-6 w-1/2 bg-black grid grid-cols-12 bg-opacity-80">
        <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className="m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
