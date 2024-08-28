import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
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
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
