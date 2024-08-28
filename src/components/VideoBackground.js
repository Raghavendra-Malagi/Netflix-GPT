import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //   const [trailerId, setTrailerId] = useState(null);
  const trailerClip = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="inherit w-[100%] h-[100%]">
      {/* <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      <div className="w-screen aspect-video">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerClip?.key +
            "?&autoplay=1&mute=1&controls=0&loop=1&playlist=" +
            trailerClip?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          oallowfullscreen="true"
          msallowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
