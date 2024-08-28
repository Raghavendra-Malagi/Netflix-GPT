import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //   const [trailerId, setTrailerId] = useState(null);
  const trailerClip = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div class>
      {/* <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      <div className="bg-black bg-opacity-40 w-screen aspect-video">
        <iframe
          className="w-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerClip?.key +
            "?&autoplay=1&mute=1&controls=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          oallowfullscreen
          msallowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
