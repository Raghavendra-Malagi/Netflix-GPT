import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 pr-10">
      {posterPath && <img src={IMG_CDN + posterPath} alt="" />}
    </div>
  );
};

export default MovieCard;
