import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const res = await data.json();

    dispatch(addTopRatedMovies(res.results));
  };
};

export default useTopRatedMovies;
