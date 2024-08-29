import React from "react";
import { BG_IMG_URl } from "../utils/constants";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchPage = () => {
  const langKey = useSelector((store) => store?.config?.lang);
  console.log(langKey);
  return (
    <>
      <div>
        <img src={BG_IMG_URl} alt="logo" />
      </div>
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-40  w-[900px] m-auto text-center">
        <form action="" className=" bg-black p-6">
          <input
            type="text"
            placeholder={lang[langKey]?.gptSearchPlaceHolder}
            className="p-2 rounded-l-full w-96 border-none focus:outline-none"
          />
          <button className="bg-red-700 rounded-r-full px-10 py-2  text-white">
            {lang[langKey]?.search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchPage;
