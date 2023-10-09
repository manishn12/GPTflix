import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black-600">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black rounded-xl p-3 px-10 cursor-pointer hover:bg-opacity-80">▶️ Play</button>
        <button className="mx-2 bg-white text-black rounded-xl p-3 px-10 cursor-pointer hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
