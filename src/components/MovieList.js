import MovieCard from "../components/MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="ml-8 ">
      <h1 className="text-2xl font-bold my-3">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden relative">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie?.poster_path}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
