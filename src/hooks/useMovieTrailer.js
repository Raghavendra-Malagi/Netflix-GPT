import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getBackgroundVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter((res) => res.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getBackgroundVideo();
  }, []);
};
export default useMovieTrailer;
