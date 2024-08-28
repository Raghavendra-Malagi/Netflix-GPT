import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-screen   bg-gradient-to-r from-black aspect-video">
      <div className="absolute top-[50%] left-[2%] translate-y-[-50%]">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <p className="py-6 text-lg w-1/2 text-white">{overview}</p>
        <div className="flex ">
          <button className="bg-white hover:bg-opacity-80 p-2 text-black rounded-sm flex items-center">
            <FaPlay className="mr-1" /> PlayMore
          </button>
          <button className="bg-slate-600 bg-opacity-30 hover:bg-slate-400 p-2 ml-2 text-white rounded-sm flex items-center">
            <AiOutlineExclamationCircle className="mr-1" /> More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
