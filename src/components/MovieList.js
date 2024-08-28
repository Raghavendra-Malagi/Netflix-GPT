import MovieCard from "../components/MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="ml-8 ">
      <h1 className="text-2xl font-bold my-3">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
