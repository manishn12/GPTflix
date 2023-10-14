import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-3xl  font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="mt-4 md:mt-0">
        <button className="bg-white text-black rounded-xl p-2 md:p-3 md:px-10 px-5 cursor-pointer hover:bg-opacity-80">▶️ Play</button>
        <button className="hidden md:inline-block mx-2 bg-white text-black rounded-xl p-2 md:p-3 md:px-10 px-5 cursor-pointer hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
