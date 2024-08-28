import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies, addUpComingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpComingMovies();
  }, []);
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const res = await data.json();

    dispatch(addUpComingMovies(res.results));
  };
};

export default useUpComingMovies;
