import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpComingMovies from "../hooks/useUpcomingMovies.js";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  return (
    <>
      <div className="relative">
        <Header />
        {/*
          MainContainer
            --Video Background
            --Video Title
          SecondaryContainer
            --Movie list * n
            --Cards * n
        
        */}
        <MainContainer />
      </div>

      <div>
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
