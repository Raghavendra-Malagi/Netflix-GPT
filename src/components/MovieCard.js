import React, { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopUpVideo } from "../utils/moviesSlice";
import { updateIsOpen } from "../utils/isOpenSlice";

const MovieCard = ({ posterPath, id }) => {
  // const trailerClip = useSelector((store) => store.movies?.popUpVideo);
  const isOpen = useSelector((store) => store.isOpen?.updateOpen);
  const dispatch = useDispatch();
  const [iframeKey, setIframeKey] = useState("");
  const handleIframeId = (e) => {
    setIframeKey(e.target.id);
    console.log(iframeKey);
    console.log(isOpen);

    dispatch(updateIsOpen());
  };
  const getTrailerData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        iframeKey +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter((res) => res.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(filteredData);

    console.log(trailer);
    dispatch(addPopUpVideo(trailer));
  };
  useEffect(() => {
    iframeKey !== "" && getTrailerData();
  }, [iframeKey]);
  return (
    <div className="w-52 pr-10 overflow-hidden">
      {posterPath && (
        <div>
          <img
            src={IMG_CDN + posterPath}
            alt="posterPath"
            id={id}
            className="cursor-pointer hover:scale-110 transition-all"
            onClick={(e) => handleIframeId(e)}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
