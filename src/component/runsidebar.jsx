import React from "react";
import "../styles/animated.css";

const RunSidebar = () => {
  const images = [, "/CVM logo.png", "/ADIT.png", "/gcet.png", "/mbit.png","/samcom.png","/aribas1.png" ];

  return (
    <div className=" flex items-center mt-[50px] mb-12 justify-center">
      {/* 1. */}
      <div className="w-[200%] h-[180px] flex items-center border-t border-b border-gray-600 overflow-hidden relative">
        {/* 2. */}
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate p-10">
          {/* 3 */}
          {images.map((i) => {
            return (
              <div className=" items-start w-[40rem]">
                <img src={i} />
              </div>
            );
          })}
          {images.map((i) => {
            return (
              <div className=" items-start w-[40rem]">
                <img src={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RunSidebar;
