import { useDispatch, useSelector } from "react-redux";
import { updateIsOpen } from "../utils/isOpenSlice";

const PopUp = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerClip = useSelector((store) => store?.movies?.popUpVideo);
  const isOpen = useSelector((store) => store.isOpen?.updateOpen);
  const handleIframeClose = () => {
    console.log(isOpen);
    dispatch(updateIsOpen());
  };
  return (
    <>
      {isOpen && (
        <div className="absolute w-full h-[500px] bg-black aspect-video z-50 flex items-center">
          <div className="m-auto">
            <iframe
              className="w-[1000px] h-[500px]"
              src={
                "https://www.youtube.com/embed/" +
                trailerClip?.key +
                "?&controls=0&loop=1&playlist=" +
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
          <button
            onClick={handleIframeClose}
            className="absolute top-0 right-10 text-2xl cursor-pointer"
          >
            close
          </button>
        </div>
      )}
    </>
  );
};

export default PopUp;
