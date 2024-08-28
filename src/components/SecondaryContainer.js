import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      {/*
      Movie List - Popular
        -- movie cards * n
      Movie List - Now Playing
      Movie List - Trending
      Movie List - Horror
    */}
      <div className="-mt-52 text-white relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"UpComing Movies"} movies={movies.upComingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
