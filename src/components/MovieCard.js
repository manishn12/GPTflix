import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ name, posterPath }) => {
  if (!posterPath) {
    return;
  }

  return (
    <div className="w-36 md:w-48 pr-4">
      <div className="rounded-xl">
        <img alt={name} src={IMAGE_CDN_URL + posterPath} />
      </div>
    </div>
  );
};

export default MovieCard;
