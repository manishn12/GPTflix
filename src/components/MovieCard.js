import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ name, posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <div className="rounded-lg">
        <img alt={name} src={IMAGE_CDN_URL + posterPath} />
      </div>
    </div>
  );
};

export default MovieCard;
